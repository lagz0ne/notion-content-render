import type {
  Block,
  BulletedListItemBlock,
  HeadingOneBlock,
  HeadingThreeBlock,
  HeadingTwoBlock,
  NumberedListItemBlock,
  ParagraphBlock,
  RichText,
  RichTextText,
  ToDoBlock,
  ToggleBlock,
  UnsupportedBlock,
} from "@notionhq/client/build/src/api-types";

export const BLOCK_TYPES = {
  PARAGRAPH: "paragraph",
  HEADING_1: "heading_1",
  HEADING_2: "heading_2",
  HEADING_3: "heading_3",
  BULLETED_LIST_ITEM: "bulleted_list_item",
  NUMBERED_LIST_ITEM: "numbered_list_item",
  TO_DO: "to_do",
  TOGGLE: "toggle",
  CHILD_PAGE: "child_page",

  RICH_TEXT_TEXT: "text",
  RICH_TEXT_MENTION: "mention",
  RICH_TEXT_equation: "equation",
  UNSUPPORTED: "unsupported",
};

type Modifier<R> = (input: R) => R;

function compose<R>(fns: Modifier<R>[]): (x: R) => R {
  return (x: R) => fns.reduceRight((y, f) => f(y), x);
}

export type StyleFactory<R> = {
  heading_1: (input: R, block: HeadingOneBlock) => R;
  heading_2: (input: R, block: HeadingTwoBlock) => R;
  heading_3: (input: R, block: HeadingThreeBlock) => R;
  paragraph: (input: R, block: ParagraphBlock) => R;
  bold: Modifier<R>;
  strikethrough: Modifier<R>;
  italic: Modifier<R>;
  underline: Modifier<R>;
  inlineCode: Modifier<R>;
  bulletList: (children: Array<R>) => R;
  bulletListItem: (input: R) => R;
  numberedList: (children: Array<R>) => R;
  numberedListItem: (input: R, index: number) => R;
  text: (content: string) => R;
  richText: (input: Array<R>) => R;
  toggle: (title: R, content: R, block: ToggleBlock) => R;
  todo: (checked: boolean, content: R | undefined, block: ToDoBlock) => R;
  link: (content: R, href: string, block: RichText) => R;
  unsupported: (block: Block) => R;
};

type Maker<B> = {
  renderBlock: (block: Block) => B;
  renderRichText: (richText: RichText[]) => B;
  renderBlocks: (block: Block[]) => B[];
};

function isBulletListItem(block: Block): boolean {
  return block.type === BLOCK_TYPES.BULLETED_LIST_ITEM;
}

function isNumberedListItem(block: Block): boolean {
  return block.type === BLOCK_TYPES.NUMBERED_LIST_ITEM;
}

export default function <B>(styleFactory: StyleFactory<B>): Maker<B> {
  function toHeading_1(block: HeadingOneBlock): B {
    const { text } = block[block.type];
    const richText = toRichTextBlock(text);
    return styleFactory.heading_1(richText, block);
  }

  function toHeading_2(block: HeadingTwoBlock): B {
    const { text } = block[block.type];
    const richText = toRichTextBlock(text);
    return styleFactory.heading_2(richText, block);
  }

  function toHeading_3(block: HeadingThreeBlock): B {
    const { text } = block[block.type];
    const richText = toRichTextBlock(text);
    return styleFactory.heading_3(richText, block);
  }

  function toParagraph(block: ParagraphBlock): B {
    const richText = toRichTextBlock(block.paragraph.text);
    return styleFactory.paragraph(richText, block);
  }

  function toRichTextBlock(textArray: RichText[]): B {
    return styleFactory.richText(textArray.map(toRichText));
  }

  function toRichText(richText: RichText): B {
    richText = richText as RichTextText;
    const { bold, italic, strikethrough, underline, code, color } =
      richText.annotations;

    const formatters: Modifier<B>[] = [];

    bold && formatters.push(styleFactory.bold);
    italic && formatters.push(styleFactory.italic);
    strikethrough && formatters.push(styleFactory.strikethrough);
    underline && formatters.push(styleFactory.underline);
    code && formatters.push(styleFactory.inlineCode);

    let content = styleFactory.text(richText.text.content);
    if (richText.href) {
      content = styleFactory.link(content, richText.href, richText);
    }

    if (formatters.length === 0) {
      return content;
    }

    if (formatters.length === 1) {
      return formatters[0](content);
    }

    return compose(formatters)(content);
  }

  function toBulletListItem(bulletItem: BulletedListItemBlock): B {
    const bulletItemContent: B = toRichTextBlock(
      bulletItem.bulleted_list_item.text
    );
    return styleFactory.bulletListItem(bulletItemContent);
  }

  function toBulletList(content: B[]): B {
    return styleFactory.bulletList(content);
  }

  function toNumberedListItem(
    numberListItem: NumberedListItemBlock,
    index: number
  ): B {
    const bulletItemContent: B = toRichTextBlock(
      numberListItem.numbered_list_item.text
    );
    return styleFactory.numberedListItem(bulletItemContent, index);
  }

  function toNumberedList(content: B[]): B {
    return styleFactory.numberedList(content);
  }

  function toToggle(content: ToggleBlock): B {
    const title = toRichTextBlock(content.toggle.text);

    const children: B | undefined = undefined; //Notion doesn't return this yet
    return styleFactory.toggle(title, children, content);
  }

  function toTodo(content: ToDoBlock): B {
    const title = toRichTextBlock(content.to_do.text);
    return styleFactory.todo(content.to_do.checked, title, content);
  }

  function renderBlock(block: Block, index?: number): B {
    switch (block.type) {
      case BLOCK_TYPES.HEADING_1:
        return toHeading_1(block as HeadingOneBlock);
      case BLOCK_TYPES.HEADING_2:
        return toHeading_2(block as HeadingTwoBlock);
      case BLOCK_TYPES.HEADING_3:
        return toHeading_3(block as HeadingThreeBlock);

      case BLOCK_TYPES.PARAGRAPH:
        return toParagraph(block as ParagraphBlock);
      case BLOCK_TYPES.BULLETED_LIST_ITEM:
        return toBulletListItem(block as BulletedListItemBlock);
      case BLOCK_TYPES.NUMBERED_LIST_ITEM:
        return toNumberedListItem(block as NumberedListItemBlock, index);

      case BLOCK_TYPES.TO_DO:
        return toTodo(block as ToDoBlock);

      case BLOCK_TYPES.TOGGLE:
        return toToggle(block as ToggleBlock);

      default:
        return styleFactory.unsupported(block);
    }
  }

  function renderBlocks(blocks: Block[]): B[] {
    let index = 0;
    const result: B[] = [];

    function isNext(predicate: (nextBlock: Block) => boolean) {
      return index + 1 < blocks.length && predicate(blocks[index + 1]);
    }

    while (index < blocks.length) {
      const item = blocks[index];
      if (!isNumberedListItem(item) && !isBulletListItem(item)) {
        result.push(renderBlock(item));
        index++;
        continue;
      }

      if (isNumberedListItem(item)) {
        const numbered: B[] = [];
        numbered.push(renderBlock(item, 1));

        while (isNext(isNumberedListItem)) {
          numbered.push(renderBlock(blocks[index++], numbered.length + 1));
        }

        result.push(toNumberedList(numbered));
      }

      if (isBulletListItem(item)) {
        const numbered: B[] = [];
        numbered.push(renderBlock(item));

        while (isNext(isBulletListItem)) {
          numbered.push(renderBlock(blocks[index++]));
        }

        result.push(toBulletList(numbered));
      }

      index++;
    }
    return result;
  }

  return {
    renderRichText: toRichTextBlock,
    renderBlock,
    renderBlocks,
  };
}
