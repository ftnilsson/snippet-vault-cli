import version from './version';
import help from './help';
import add from './add';
import program from 'commander';
import { loadSnippets } from './fileIO';
import search from './search';
import { tag, tags } from './tags';
let snippets = [];

export async function cli(argsArray) {
	program
		.option('-a, --add', 'add snippet')
		.option('-s, --search <searchterm>', 'search snippets')
		.option('-t, --tag [tagname]', 'serach tag')
		.option('-v, --vers', 'display version number');

	program.parse(argsArray);
	
	var loadedSnippets = loadSnippets();

	if (loadedSnippets) {
		snippets = JSON.parse(loadedSnippets);
	}

	program.on('--help', function() {
		help();
	});

	if (program.vers === true) {
		version();
	} 

	if (program.add === true) {
		add(snippets);
		return;
	} 
	
	if (program.search !== undefined) {
		search(snippets, program.search);
	}
	
	if(program.tag !== undefined){
		if(program.tag === true){
			tags(snippets);
		}else{
			tag(snippets, program.tag);
		}
	}
}
