import type {
  BlockBase,
  BulletedListItemBlock,
  HeadingOneBlock,
  HeadingThreeBlock,
  HeadingTwoBlock,
  ParagraphBlock,
  RichText,
  RichTextText,
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
};

type Modifier<R> = (input: R) => R;

function compose<R>(fns: Modifier<R>[]): (x: R) => R {
  return (x: R) => fns.reduceRight((y, f) => f(y), x);
}

export type StyleFactory<R> = {
  heading_1: (input: Array<R>) => R;
  heading_2: (input: Array<R>) => R;
  heading_3: (input: Array<R>) => R;
  paragraph: (input: Array<R>) => R;
  bold: Modifier<R>;
  strikethrough: Modifier<R>;
  italic: Modifier<R>;
  underline: Modifier<R>;
  inlineCode: Modifier<R>;
  bulletList: (children: Array<R>) => R;
  bulletListItem: (input: R) => R;
  text: (content: string) => R;
};

export default function <B>(styleFactory: StyleFactory<B>) {
  function toHeading_1(block: HeadingOneBlock): B {
    const { text } = block[block.type];
    const richText = toRichTextBlock(text);
    return styleFactory.heading_1(richText);
  }

  function toHeading_2(block: HeadingTwoBlock): B {
    const { text } = block[block.type];
    const richText = toRichTextBlock(text);
    return styleFactory.heading_2(richText);
  }

  function toHeading_3(block: HeadingThreeBlock): B {
    const { text } = block[block.type];
    const richText = toRichTextBlock(text);
    return styleFactory.heading_3(richText);
  }

  function toParagraph(block: ParagraphBlock): B {
    const richText = toRichTextBlock(block.paragraph.text);
    return styleFactory.paragraph(richText);
  }

  function toRichTextBlock(textArray: RichText[]): B[] {
    return textArray.map(toRichText);
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

    const content = styleFactory.text(richText.text.content);
    if (formatters.length === 0) {
      return content;
    }

    if (formatters.length === 1) {
      return formatters[0](content);
    }

    return compose(formatters)(content);
  }

  function toBulletListItem(bulletItem: RichText): B {
    const bulletItemContent: B = toRichText(bulletItem);
    return styleFactory.bulletListItem(bulletItemContent);
  }

  function toBulletList(block: BulletedListItemBlock): B {
    const { text } = block.bulleted_list_item;
    return styleFactory.bulletList(text.map(toBulletListItem));
  }

  return (block: BlockBase) => {
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
        return toBulletList(block as BulletedListItemBlock);
      default:
        break;
    }
  };
}
