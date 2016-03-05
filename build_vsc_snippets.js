var yaml = require('yamljs');
var fs = require('fs');

var jsonObject = yaml.load('snippets.yml');
var vscSnippets = {}
for (snippetObject of jsonObject) {

  vscSnippet = {};
  vscSnippet.prefix = snippetObject.tabTrigger;
  vscSnippet.body = snippetObject.content.replace("<![CDATA[", "").replace("]]>", "");;
  vscSnippet.description = snippetObject.description;
  vscSnippet.scope = snippetObject.scope;

  vscSnippets[vscSnippet.description] = vscSnippet;

};

fs.writeFileSync('./build/snippets.json', JSON.stringify(vscSnippets, null, '  '));
