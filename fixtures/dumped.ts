import type {
  Block,
  PaginatedList,
} from "@notionhq/client/build/src/api-types";

const blocks: PaginatedList<Block> = {
  object: "list",
  results: [
    {
      object: "block",
      id: "0226e5d0-de28-4ef0-9910-bed2995045e1",
      created_time: "2021-06-27T10:54:00.000Z",
      last_edited_time: "2021-06-27T10:54:00.000Z",
      has_children: false,
      type: "heading_1",
      heading_1: {
        text: [
          {
            type: "text",
            text: {
              content: "Heading 1",
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
            plain_text: "Heading 1",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "43cabe2f-1d4a-4c04-84a4-d24569db07ff",
      created_time: "2021-06-27T10:54:00.000Z",
      last_edited_time: "2021-06-27T10:54:00.000Z",
      has_children: false,
      type: "heading_2",
      heading_2: {
        text: [
          {
            type: "text",
            text: {
              content: "Heading 2",
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
            plain_text: "Heading 2",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "245035cb-de84-4259-9c88-32b67792e5af",
      created_time: "2021-06-27T10:54:00.000Z",
      last_edited_time: "2021-06-27T10:54:00.000Z",
      has_children: false,
      type: "heading_3",
      heading_3: {
        text: [
          {
            type: "text",
            text: {
              content: "Heading 3",
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
            plain_text: "Heading 3",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "3976c9d2-ef4a-4c19-8a50-5436534bb90d",
      created_time: "2021-06-27T10:54:00.000Z",
      last_edited_time: "2021-06-27T10:55:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "Paragraph with ",
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
            plain_text: "Paragraph with ",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "d8173c31-166e-4608-afdd-3620d60f0d09",
      created_time: "2021-06-27T10:55:00.000Z",
      last_edited_time: "2021-06-27T11:46:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "bold",
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
            plain_text: "bold",
            href: null,
          },
          {
            type: "text",
            text: {
              content: " ",
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
            plain_text: " ",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "7e42aebc-b98a-4011-9f7d-120e978c7ec6",
      created_time: "2021-06-27T10:55:00.000Z",
      last_edited_time: "2021-06-27T10:55:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "underline",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: true,
              code: false,
              color: "default",
            },
            plain_text: "underline",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "b94150fe-730a-4216-a75c-4f2d59aa34f4",
      created_time: "2021-06-27T10:55:00.000Z",
      last_edited_time: "2021-06-27T10:55:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "strikethrough",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: true,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "strikethrough",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "8ee5f9ec-540a-4af5-addf-f0d385236256",
      created_time: "2021-06-27T10:55:00.000Z",
      last_edited_time: "2021-06-27T10:55:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "italic",
              link: null,
            },
            annotations: {
              bold: false,
              italic: true,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "italic",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "933fb098-acdd-47e8-b251-e1d8b68e9565",
      created_time: "2021-06-27T10:56:00.000Z",
      last_edited_time: "2021-06-27T10:56:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "inlinecode",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: true,
              color: "default",
            },
            plain_text: "inlinecode",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "5db103fa-8630-4f85-b327-1372f626ad15",
      created_time: "2021-06-27T10:55:00.000Z",
      last_edited_time: "2021-06-27T10:56:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "combine",
              link: null,
            },
            annotations: {
              bold: true,
              italic: true,
              strikethrough: true,
              underline: true,
              code: false,
              color: "default",
            },
            plain_text: "combine",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "98a4d14e-985c-40cd-aca7-72c1e272579e",
      created_time: "2021-06-27T10:56:00.000Z",
      last_edited_time: "2021-06-27T10:56:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [],
      },
    },
    {
      object: "block",
      id: "bf118391-4839-4545-9cb5-13f2ef6794fd",
      created_time: "2021-06-27T10:56:00.000Z",
      last_edited_time: "2021-06-27T10:56:00.000Z",
      has_children: false,
      type: "bulleted_list_item",
      bulleted_list_item: {
        text: [
          {
            type: "text",
            text: {
              content: "bulleted list",
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
            plain_text: "bulleted list",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "8c5f1480-b5ae-42eb-ad16-1a38f7c0555b",
      created_time: "2021-06-27T10:56:00.000Z",
      last_edited_time: "2021-06-27T10:56:00.000Z",
      has_children: false,
      type: "bulleted_list_item",
      bulleted_list_item: {
        text: [
          {
            type: "text",
            text: {
              content: "and bulleted list",
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
            plain_text: "and bulleted list",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "584430bf-eb17-48bb-ab94-78f954d14b4d",
      created_time: "2021-06-27T10:56:00.000Z",
      last_edited_time: "2021-06-27T10:56:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "and",
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
            plain_text: "and",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "806f94ee-f816-432a-8e50-e714f102532b",
      created_time: "2021-06-27T10:56:00.000Z",
      last_edited_time: "2021-06-27T10:56:00.000Z",
      has_children: false,
      type: "numbered_list_item",
      numbered_list_item: {
        text: [
          {
            type: "text",
            text: {
              content: "numbered list",
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
            plain_text: "numbered list",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "ca2d73cc-879b-4255-8caf-2257691e27ea",
      created_time: "2021-06-27T10:56:00.000Z",
      last_edited_time: "2021-06-27T10:57:00.000Z",
      has_children: false,
      type: "numbered_list_item",
      numbered_list_item: {
        text: [
          {
            type: "text",
            text: {
              content: "2nd numbered list",
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
            plain_text: "2nd numbered list",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "b4932222-6f7b-45bc-8872-8442bf8ba649",
      created_time: "2021-06-27T10:57:00.000Z",
      last_edited_time: "2021-06-27T10:57:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "and",
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
            plain_text: "and",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "500ae112-1b26-49aa-8300-33761c04ac9a",
      created_time: "2021-06-27T10:57:00.000Z",
      last_edited_time: "2021-06-27T10:57:00.000Z",
      has_children: false,
      type: "to_do",
      to_do: {
        text: [
          {
            type: "text",
            text: {
              content: "unchecked todo",
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
            plain_text: "unchecked todo",
            href: null,
          },
        ],
        checked: false,
      },
    },
    {
      object: "block",
      id: "4dfa7a10-8bd3-4aed-9d1f-b1eeb09d4044",
      created_time: "2021-06-27T10:57:00.000Z",
      last_edited_time: "2021-06-27T10:57:00.000Z",
      has_children: false,
      type: "to_do",
      to_do: {
        text: [
          {
            type: "text",
            text: {
              content: "and a checked one",
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
            plain_text: "and a checked one",
            href: null,
          },
        ],
        checked: true,
      },
    },
    {
      object: "block",
      id: "08ec03d5-5402-4562-860e-e0c10cf2b035",
      created_time: "2021-06-27T10:57:00.000Z",
      last_edited_time: "2021-06-27T11:11:00.000Z",
      has_children: true,
      type: "toggle",
      toggle: {
        text: [
          {
            type: "text",
            text: {
              content: "and a toggle",
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
            plain_text: "and a toggle",
            href: null,
          },
        ],
      },
    },
    {
      object: "block",
      id: "2e1a7fa1-1e9c-4bb3-ab47-1473c9067f0b",
      created_time: "2021-06-28T11:35:00.000Z",
      last_edited_time: "2021-06-28T11:35:00.000Z",
      has_children: false,
      type: "paragraph",
      paragraph: {
        text: [
          {
            type: "text",
            text: {
              content: "l",
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "l",
            href: "https://alink.com",
          },
          {
            type: "text",
            text: {
              content: "i",
            },
            annotations: {
              bold: true,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "i",
            href: "https://alink.com",
          },
          {
            type: "text",
            text: {
              content: "nk",
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text: "nk",
            href: "https://alink.com",
          },
        ],
      },
    },
    {
      object: "block",
      id: "068b3ef4-ee18-4589-abee-b0f6ebb7dcc1",
      created_time: "2021-06-29T07:49:00.000Z",
      last_edited_time: "2021-07-10T08:13:00.000Z",
      has_children: true,
      type: "bulleted_list_item",
      bulleted_list_item: {
        text: [
          {
            type: "text",
            text: {
              content: "nested bullet",
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
            plain_text: "nested bullet",
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
