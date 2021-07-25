/**
 * @jest-environment jsdom
 */
import React from "react";
import makeRenderer from "../index";
import reactStyleFactory from "../react.style";

import data from "../../fixtures/dumped";
import testUtils from "../../fixtures/blocks";

import { render, screen, cleanup } from "@testing-library/react";
import { Block } from "@notionhq/client/build/src/api-types";

const { renderBlock: notionRenderer, renderBlocks } =
  makeRenderer(reactStyleFactory);

test("test heading 1 render", async () => {
  const Heading1 = notionRenderer(testUtils.getFirstHeading1(data));
  render(<Heading1 />);
  expect((await screen.findByText("Heading 1")).tagName).toMatch("H1");
});

test("test heading 2 render", async () => {
  const Heading2 = notionRenderer(testUtils.getFirstHeading2(data));
  render(<Heading2 />);
  expect((await screen.findByText("Heading 2")).tagName).toMatch("H2");
});

test("test heading 3 render", async () => {
  const Heading3 = notionRenderer(testUtils.getFirstHeading3(data));
  render(<Heading3 />);
  expect((await screen.findByText("Heading 3")).tagName).toMatch("H3");
});

async function testRender(
  data: Block,
  contentToFind: string,
  tagToMatch: string
) {
  cleanup();
  const Component = notionRenderer(data);
  render(<Component />);
  expect((await screen.findByText(contentToFind)).tagName).toMatch(tagToMatch);
}

test("test render paragraph", async () => {
  const [plain, bold, underline, strikethrough, italic, inlinecode, combine] =
    testUtils.getParagraphs(data);

  await testRender(bold, "bold", "B");
  await testRender(plain, "Paragraph with", "P");
  await testRender(underline, "underline", "U");
  await testRender(strikethrough, "strikethrough", "S");
  await testRender(italic, "italic", "I");
  await testRender(inlinecode, "inlinecode", "CODE");

  const Combined = notionRenderer(combine);
  render(<Combined />);

  const testingElement = screen.getByText("combine");
  expect(testingElement.tagName).toEqual("U");
  expect(testingElement.parentElement.tagName).toEqual("S");
  expect(testingElement.parentElement.parentElement.tagName).toEqual("I");
  expect(
    testingElement.parentElement.parentElement.parentElement.tagName
  ).toEqual("B");
});

const noOps = () => {};

test("test render todos", async () => {
  const todos = testUtils.getTodos(data);

  const todoComponents = renderBlocks(todos);
  let index = 0;
  render(
    <>
      {todoComponents.map((Todo) => (
        <Todo data-testid={`input-${index}`} key={index++} onChange={noOps} />
      ))}
    </>
  );

  expect(screen.getByTestId("input-0").hasAttribute("checked")).toBeFalsy();

  expect(screen.getByTestId("input-1").hasAttribute("checked")).toBeTruthy();
});

test("test renders", async () => {
  const components = renderBlocks(data.results);
  let index = 0;
  render(
    <>
      {components.map((Comp) => (
        <Comp key={index++} onChange={noOps} />
      ))}
    </>
  );
  screen.debug();
});
