import React from "react";
import type { StyleFactory } from "./index";

const ReactStyleFactory: StyleFactory<React.FunctionComponent> = {
  bold: (Child) => () =>
    (
      <b>
        <Child />
      </b>
    ),
  bulletList: (Children) => () => {
    let i = 0;
    return (
      <ul>
        {Children.map((Child) => (
          <Child key={i++} />
        ))}
      </ul>
    );
  },
  bulletListItem: (Child) => () =>
    (
      <li>
        <Child />
      </li>
    ),
  heading_1: (Child) => () =>
    (
      <h1>
        <Child />
      </h1>
    ),
  heading_2: (Child) => () =>
    (
      <h2>
        <Child />
      </h2>
    ),
  heading_3: (Child) => () =>
    (
      <h3>
        <Child />
      </h3>
    ),
  italic: (Child) => () =>
    (
      <i>
        <Child />
      </i>
    ),
  inlineCode: (Child) => () =>
    (
      <code>
        <Child />
      </code>
    ),
  paragraph: (Child) => () =>
    (
      <p>
        <Child />
      </p>
    ),
  strikethrough: (Child) => () =>
    (
      <s>
        <Child />
      </s>
    ),
  underline: (Child) => () =>
    (
      <u>
        <Child />
      </u>
    ),
  text: (Child) => () => <>{Child}</>,
  richText: (Children) => () => {
    let i = 0;
    return (
      <React.Fragment>
        {Children.map((Child) => (
          <Child key={i++} />
        ))}
      </React.Fragment>
    );
  },
  numberedList: (Children) => () => {
    let i = 0;
    return (
      <ol>
        {Children.map((Child) => (
          <Child key={i++} />
        ))}
      </ol>
    );
  },
  numberedListItem: (Child) => () =>
    (
      <li>
        <Child />
      </li>
    ),
  toggle: (Title, Content) => () =>
    (
      <details>
        <summary>
          <Title />
        </summary>
        <Content />
      </details>
    ),
  todo: (checked, Content) => () =>
    (
      <>
        <input type="checkbox" checked={checked} />
        <Content />
      </>
    ),
  link: (Content, href) => () =>
    (
      <a href={href}>
        <Content />
      </a>
    ),
  unsupported: () => () => <></>,
};

export default ReactStyleFactory;
