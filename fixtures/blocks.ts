import type {
  Block,
  BulletedListItemBlock,
  HeadingOneBlock,
  HeadingThreeBlock,
  HeadingTwoBlock,
  NumberedListItemBlock,
  PaginatedList,
  ParagraphBlock,
  ToDoBlock,
} from "@notionhq/client/build/src/api-types";

type Utils = {
  getFirstHeading1: (content: PaginatedList<Block>) => HeadingOneBlock;
  getFirstHeading2: (content: PaginatedList<Block>) => HeadingTwoBlock;
  getFirstHeading3: (content: PaginatedList<Block>) => HeadingThreeBlock;
  getParagraphs: (content: PaginatedList<Block>) => ParagraphBlock[];
  getNumberedList: (content: PaginatedList<Block>) => NumberedListItemBlock[];
  getBulletedList: (content: PaginatedList<Block>) => BulletedListItemBlock[];
  getTodos: (content: PaginatedList<Block>) => ToDoBlock[];
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
  getTodos: (content) =>
    content.results.filter((item) => item.type === "to_do") as ToDoBlock[],
  getNumberedList: (content) =>
    content.results.filter(
      (item) => item.type === "bulleted_list_item"
    ) as NumberedListItemBlock[],
  getBulletedList: (content) =>
    content.results.filter(
      (item) => item.type === "bulleted_list_item"
    ) as BulletedListItemBlock[],
};

export default utils;
