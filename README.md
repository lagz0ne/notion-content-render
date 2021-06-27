## **notion-content-render**

This is a simple walker through Notion block content structure and let you build the renderer

I created a sample of Markdown renderer and React renderer where you can freely style your component from Notion content. The exposed API matches with what Notion has provided via their official API

**Example**
```
const render = makeRenderer(mdStyleFactory);
...
render(<notion heading 1 block>) ==> '# <Notion heading one block>
```

## **References**
- [React simple renderer](src/react.style.tsx)
- [Markdown simple renderer](src/md.style.tsx)
- [Notion block content reference](https://developers.notion.com/reference/block)
- [Test suite content](https://www.notion.so/silenteer/Notion-supported-block-test-page-0185884dda90435bb1196daf5788cf05)