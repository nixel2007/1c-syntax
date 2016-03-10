var CSON = require('cson');
var fs = require('fs');
var yaml = require('yamljs');

var jsonObject = yaml.load('snippets.yml');
var atomSnippets = {};
var snippetsArray = {};

for (snippetObject of jsonObject) {

  atomSnippet = {};
  atomSnippet.prefix = snippetObject.tabTrigger;
  atomSnippet.body = snippetObject.content;
  atomSnippet.description = snippetObject.description;

  snippetsArray[atomSnippet.description] = atomSnippet;

};

atomSnippets['.source.bsl'] = snippetsArray;

fs.writeFileSync('./build/language-1c-bsl.cson', CSON.stringify(atomSnippets, null, '  '));
