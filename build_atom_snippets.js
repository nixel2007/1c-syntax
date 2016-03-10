var CSON = require('cson');
var fs = require('fs');
var yaml = require('yamljs');

var jsonObject = yaml.load('snippets.yml');
var atomSnippets = {};
var snippetsArray = {};
var seen = {};

for (snippetObject of jsonObject) {

  atomSnippet = {};
  atomSnippet.prefix = snippetObject.tabTrigger;
  atomSnippet.body = snippetObject.content;
  atomSnippet.description = snippetObject.description;

  seen[snippetObject.tabTrigger] = 1 + (seen[snippetObject.tabTrigger] === undefined ? 0 : seen[snippetObject.tabTrigger]);
  if (seen[snippetObject.tabTrigger] > 1) {
    atomSnippet.prefix = atomSnippet.prefix + seen[snippetObject.tabTrigger]; 
  } 
  snippetsArray[atomSnippet.description] = atomSnippet;

};

atomSnippets['.source.bsl'] = snippetsArray;

fs.writeFileSync('./build/language-1c-bsl.cson', CSON.stringify(atomSnippets, null, '  '));
