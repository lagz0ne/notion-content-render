import React from "react";
import type { StyleFactory } from "./index";

const ReactStyleFactory: StyleFactory<React.FunctionComponent<any>> = {
  bold: (Child) => (props) =>
    (
      <b {...props}>
        <Child />
      </b>
    ),
  bulletList: (Children) => (props) => {
    let i = 0;
    return (
      <ul {...props}>
        {Children.map((Child) => (
          <Child key={i++} />
        ))}
      </ul>
    );
  },
  bulletListItem: (Child) => (props) =>
    (
      <li {...props}>
        <Child />
      </li>
    ),
  heading_1: (Child) => (props) =>
    (
      <h1 {...props}>
        <Child />
      </h1>
    ),
  heading_2: (Child) => (props) =>
    (
      <h2 {...props}>
        <Child />
      </h2>
    ),
  heading_3: (Child) => (props) =>
    (
      <h3 {...props}>
        <Child />
      </h3>
    ),
  italic: (Child) => (props) =>
    (
      <i {...props}>
        <Child />
      </i>
    ),
  inlineCode: (Child) => (props) =>
    (
      <code {...props}>
        <Child />
      </code>
    ),
  paragraph: (Child) => (props) =>
    (
      <p {...props}>
        <Child />
      </p>
    ),
  strikethrough: (Child) => (props) =>
    (
      <s {...props}>
        <Child />
      </s>
    ),
  underline: (Child) => (props) =>
    (
      <u {...props}>
        <Child />
      </u>
    ),
  text: (Child) => () => <>{Child}</>,
  richText: (Children) => (props) => {
    let i = 0;
    return (
      <React.Fragment>
        {Children.map((Child) => (
          <Child key={i++} />
        ))}
      </React.Fragment>
    );
  },
  numberedList: (Children) => (props) => {
    let i = 0;
    return (
      <ol {...props}>
        {Children.map((Child) => (
          <Child key={i++} />
        ))}
      </ol>
    );
  },
  numberedListItem: (Child) => (props) =>
    (
      <li {...props}>
        <Child />
      </li>
    ),
  toggle: (Title, Content) => (props) =>
    (
      <details {...props}>
        <summary>
          <Title />
        </summary>
        {Content && <Content />}
      </details>
    ),
  todo: (checked, Content) => (props) =>
    (
      <>
        <input {...props} type="checkbox" checked={checked} />
        <Content />
      </>
    ),
  link: (Content, href) => (props) =>
    (
      <a href={href} {...props}>
        <Content />
      </a>
    ),
  unsupported: (props) => () => <></>,
};

export default ReactStyleFactory;
