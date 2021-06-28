import makeRenderer from "../index";
import mdStyleFactory from "../md.style";

import data from "../../fixtures/dumped";
import testUtils from "../../fixtures/blocks";

const { renderBlock: render } = makeRenderer(mdStyleFactory);

test("test heading 1 render", () => {
  expect(render(testUtils.getFirstHeading1(data))).toBe(`# Heading 1`);
});

test("test heading 2 render", () => {
  expect(render(testUtils.getFirstHeading2(data))).toBe(`## Heading 2`);
});

test("test heading 3 render", () => {
  expect(render(testUtils.getFirstHeading3(data))).toBe(`### Heading 3`);
});

test("test render paragraph", () => {
  const [plain, bold, underline, strikethrough, italic, inlinecode, combine] =
    testUtils.getParagraphs(data);

  expect(render(plain)).toBe("Paragraph with ");
  expect(render(bold)).toBe("**bold** ");
  expect(render(underline)).toBe("<u>underline</u>");
  expect(render(strikethrough)).toBe("~~strikethrough~~");
  expect(render(italic)).toBe("*italic*");
  expect(render(inlinecode)).toBe("`inlinecode`");
  expect(render(combine)).toBe("***~~<u>combine</u>~~***");
});
