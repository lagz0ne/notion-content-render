import makeRenderer from "../index";
import mdStyleFactory from "../md.style";

import { blocks } from "../../fixtures/fixture";

test("basic", () => {
  const render = makeRenderer(mdStyleFactory);

  const result = blocks.results.map((block) => render(block));

  console.log(JSON.stringify(result, undefined, 2));
});
