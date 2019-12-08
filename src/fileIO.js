import fs from 'fs';
var path = require('path');
import { error, success, info } from './messages';

require('dotenv').config();

const file = process.env.SNIPPET_FILE ? process.env.SNIPPET_FILE : 'snippets.json'
const filePath = path.join(__dirname, '../', file);

const loadSnippets = () => {
	let content;
	try {
		var data = fs.readFileSync(`${filePath}`, 'utf8');
		content = data;
	} catch (e) {
		error(`load exception  ${e}`);
	}
	return content;
}

const saveSnippet = (snippets) => {
	try {
		if (fs.existsSync(filePath)) {
			fs.copyFileSync(filePath, filePath + '.bak', (err) => {
				if (err) {
					throw err;
				}

				info(`${file} was copied to ${file}.bak`);
			});
		}
		fs.writeFileSync(filePath, JSON.stringify(snippets), 'utf-8');
	} catch (e) {
		error(e);
	}
};

export { loadSnippets, saveSnippet };
