import type { StyleFactory } from "./index";

const MarkdownStyleFactory: StyleFactory<string> = {
  text: (child) => child,
  richText: (children) => children.join(""),
  heading_1: (children) => `# ${children}`,
  heading_2: (children) => `## ${children}`,
  heading_3: (children) => `### ${children}`,
  bold: (children) => `**${children}**`,
  paragraph: (children) => children,
  strikethrough: (children) => `~~${children}~~`,
  italic: (children) => `*${children}*`,
  underline: (children) => `<u>${children}</u>`,
  inlineCode: (children) => `\`${children}\``,
  bulletList: (children) => children.join("\n"),
  bulletListItem: (children) => children,
  numberedList: (children) => children.join("\n"),
  numberedListItem: (input) => input,
  toggle: (title, content) => `
    <details>
      <summary>${title}</summary>
      ${content}
    </details>`,
  todo: (checked, content) => `[${checked ? "x" : " "}] ${content}`,
  link: (children, href) => `[${children}](href)`,
  unsupported: () => "unsupported",
};

export default MarkdownStyleFactory;
