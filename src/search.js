import Fuse from 'fuse.js';
import { prompt, Select } from 'enquirer';
import { error, success, info } from './messages';
import executor from './commandExecutor';

const search = async (snippets, term) => {
	if (!term) {
		const response = await prompt([
			{
				type: 'input',
				name: 'search',
				message: 'search?'
			}
		]);

		if (!response.search || response.search.length === 0) {
			console.log(info(`${term} did not yield any results`));
			return;
		}

		term = response.search;
	}

	const result = searchSnippets(snippets, term);
	const selector = new Select({
		name: 'searchResults',
		message: 'Search Result(s)',
		numbered: true,
		choices: result.map((n) => ({ name: n.item.name , message: `${n.item.name} - ${n.item.content.substring(0,30)} ...`, value: n.item.content })),
		result() {
			// "focused" is the selected choice when multiple is not true
			return this.focused.value;
		  }
	});

	selector
		.run()
		.then(answer =>  {
			executor(answer);
		})
		.catch(console.error);
};

const searchSnippets = (snippets, searchterm) => {
	var result = [];
	var options = {
		shouldSort: true,
		includeScore: true,
		threshold: 0.3,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		minMatchCharLength: 1,
		keys: [
			{
				name: 'name',
				weight: 0.3
			},
			{
				name: 'tag',
				weight: 0.3
			},
			{
				name: 'content',
				weight: 0.7
			}
		]
	};

	var fuse = new Fuse(snippets, options);
	result = fuse.search(searchterm);

	return result;
};

export default search;
