import { prompt } from 'enquirer';
import { error, success } from './messages';
import { saveSnippet } from './fileIO';

const findName = (snippet, name) => {
	return snippet.name === name;
};
const add = async (snippets) => {
	const response = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'snippet name?',
			validate: (s, item) => {
				if (!item.input || item.input.length === 0) {
					return 'name is required';
				}
				if (snippets.find(({ name }) => name === item.input)) {
					return 'name already used';
				}
				return true;
			}
		},
		{
			type: 'input',
			name: 'content',
			message: 'snippet content?',
			validate: (s, item) => {
				if (!item.input || item.input.length === 0) {
					return 'content is required';
				}
				return true;
			}
		},
		{
			type: 'input',
			name: 'tag',
			message: 'enter a tag'
		}
	]);

	snippets.push({ name: response.name, content: response.content, tag: response.tag });
	saveSnippet(snippets);
	success('snippet added');
};

export default add;
