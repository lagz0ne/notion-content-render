import type {
  Block,
  HeadingOneBlock,
  HeadingThreeBlock,
  HeadingTwoBlock,
  PaginatedList,
  ParagraphBlock,
} from "@notionhq/client/build/src/api-types";

type Utils = {
  getFirstHeading1: (content: PaginatedList<Block>) => HeadingOneBlock;
  getFirstHeading2: (content: PaginatedList<Block>) => HeadingTwoBlock;
  getFirstHeading3: (content: PaginatedList<Block>) => HeadingThreeBlock;
  getParagraphs: (content: PaginatedList<Block>) => ParagraphBlock[];
};

const utils: Utils = {
  getFirstHeading1: (content: PaginatedList<Block>) =>
    content.results.find(
      (item) => item.type === "heading_1"
    ) as HeadingOneBlock,
  getFirstHeading2: (content: PaginatedList<Block>) =>
    content.results.find(
      (item) => item.type === "heading_2"
    ) as HeadingTwoBlock,
  getFirstHeading3: (content: PaginatedList<Block>) =>
    content.results.find(
      (item) => item.type === "heading_3"
    ) as HeadingThreeBlock,
  getParagraphs: (content) =>
    content.results.filter(
      (item) => item.type === "paragraph"
    ) as ParagraphBlock[],
};

export default utils;
