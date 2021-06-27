require("dotenv").config();

import { Client } from "@notionhq/client";
import fs from "fs/promises";
import path from "path";

const client = new Client({
  auth: process.env.NOTION_TEST_TOKEN,
});

const TEST_PAGE = "0185884dda90435bb1196daf5788cf05";

async function main() {
  let contents = await client.blocks.children.list({ block_id: TEST_PAGE });

  // remove unsupported blocks because notion type mismatched
  contents.results = contents.results.filter(
    (result) => result.type !== "unsupported"
  );

  const testFileContent = `
import type {
  Block,
  PaginatedList,
} from "@notionhq/client/build/src/api-types";

const blocks: PaginatedList<Block> = ${JSON.stringify(contents, undefined, 2)};
export default blocks;
`;

  const testFilePath = path.join(__dirname, "dumped.ts");
  await fs.writeFile(testFilePath, testFileContent);
}

main();
