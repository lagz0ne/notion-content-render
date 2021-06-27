import React from "react";
import type { StyleFactory } from "./index";

const ReactStyleFactory: StyleFactory<React.FC> = {
  bold: (input) => () => <b>{input}</b>,
  bulletList: (children) => () => <ul>{children}</ul>,
  bulletListItem: (children) => () => <li>{children}</li>,
  heading_1: (children) => () => <h1>{children}</h1>,
  heading_2: (children) => () => <h2>{children}</h2>,
  heading_3: (children) => () => <h3>{children}</h3>,
  italic: (children) => () => <i>{children}</i>,
  inlineCode: (children) => () => <code>{children}</code>,
  paragraph: (children) => () => <p>{children}</p>,
  strikethrough: (children) => () => <s>{children}</s>,
  underline: (children) => () => <u>{children}</u>,
  text: (children) => () => <span>{children}</span>,
  numberedList: (children) => () => <ol>{children}</ol>,
  numberedListItem: (input) => () => <li>{input}</li>,
  toggle: (title, content) => () =>
    (
      <details>
        <summary>${title}</summary>${content}
      </details>
    ),
  todo: (checked, content) => () =>
    (
      <input type="checkbox" checked={checked}>
        {content}
      </input>
    ),
};

export default ReactStyleFactory;
