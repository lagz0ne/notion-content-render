import type { StyleFactory } from "./index";

const MarkdownStyleFactory: StyleFactory<string> = {
  text: (child) => child,
  heading_1: (children) => `# ${children}`,
  heading_2: (children) => `## ${children}`,
  heading_3: (children) => `### ${children}`,
  bold: (children) => `**${children}**`,
  paragraph: (children) => children.join(" "),
  strikethrough: (children) => `~~${children}~~`,
  italic: (children) => `*${children}*`,
  underline: (children) => `<u>${children}</u>`,
  inlineCode: (children) => `<code>${children}</code>`,
  bulletList: (children) => `children \n`,
  bulletListItem: (children) => `- ${children}`,
};

export default MarkdownStyleFactory;
