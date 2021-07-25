import makeRenderer from "../index";
import mdStyleFactory from "../md.style";

import data from "../../fixtures/dumped";
import testUtils from "../../fixtures/blocks";

const { renderBlock: render, renderBlocks } = makeRenderer(mdStyleFactory);

test("test renders", () => {
  const result = renderBlocks(data.results);
  console.log(result);
  expect(result).toEqual([
    "# Heading 1",
    "## Heading 2",
    "### Heading 3",
    "Paragraph with ",
    "**bold** ",
    "<u>underline</u>",
    "~~strikethrough~~",
    "*italic*",
    "`inlinecode`",
    "***~~<u>combine</u>~~***",
    "",
    "bulleted list\nbulleted list",
    "and",
    "numbered list\nnumbered list",
    "and",
    "[ ] unchecked todo",
    "[x] and a checked one",
    "\n" +
      "    <details>\n" +
      "      <summary>and a toggle</summary>\n" +
      "      undefined\n" +
      "    </details>",
    "[l](href)**[i](href)**[nk](href)",
    "nested bullet",
  ]);
});
