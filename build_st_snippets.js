var yaml = require('yamljs');
var fs = require('fs');

var jsonObject = yaml.load('snippets.yml');
for (snippetObject of jsonObject) {

	var snippetString = '';
	snippetString = '<snippet>\n\
	<content><![CDATA[' + snippetObject.content + ']]></content>\n\
	<tabTrigger>' + snippetObject.tabTrigger + '</tabTrigger>\n\
	<scope>' + snippetObject.scope + '</scope>\n\
	<description>' + snippetObject.description + '</description>\n\
</snippet>';

	fs.writeFileSync('./build/snippets/' + snippetObject.description.replace('/', '-') + '.sublime-snippet', snippetString);

};
