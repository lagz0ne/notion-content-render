import type {
  Block,
  PaginatedList,
} from "@notionhq/client/build/src/api-types";

const blocks: PaginatedList<Block> = {
  object: "list",
  results: [
    {
      object: "block",
      id: "9bc30ad4-9373-46a5-84ab-0a7845ee52e6",
      created_time: "2021-03-16T16:31:00.000Z",
      last_edited_time: "2021-03-16T16:32:00.000Z",
      has_children: false,
      type: "heading_2",
      heading_2: {
        text: [
          {
            type: "text",
            text: {
              content: "Lacinato kale",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "Lacinato kale",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "7face6fd-3ef4-4b38-b1dc-c5044988eec0",
      created_time: "2021-03-16T16:34:00.000Z",
      last_edited_time: "2021-03-16T16:36:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "Lacinato kale",
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "Lacinato kale",
            href: "https://en.wikipedia.org/wiki/Lacinato_kale",
          },
          {
            type: "text",
            text: {
              content:
                " is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text:
              " is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "7636e2c9-b6c1-4df1-aeae-3ebf0073c5cb",
      created_time: "2021-03-16T16:35:00.000Z",
      last_edited_time: "2021-03-16T16:36:00.000Z",
      has_children: true,
      type: "toggle",
      toggle: {
        text: [
          {
            type: "text",
            text: {
              content: "Recipes",
              link: null,
            },
            annotations: {
              bold: true,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "Recipes",
            href: null,
          },
        ],
      },
    },
  ],
  next_cursor: null,
  has_more: false,
};

export default blocks;
