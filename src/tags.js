import { prompt, Select } from 'enquirer';
import { error, success, info } from './messages';
import executor from './commandExecutor';

const tag = async (snippets, tag) => {
	if (tag && tag.length > 0) {
		var result = snippets.filter((item) => item.tag === tag);

		const snippetSelector = await new Select({
			name: 'tags',
			message: 'Select snippet',
			numbered: true,
			choices: result.map((n) => ({
				name: n.name,
				message: `${n.name} - ${n.content.substring(0, 30)} ...`,
				value: n.content
			})),
			result() {
				return this.focused.value;
			}
		});

		snippetSelector
			.run()
			.then((answer) => {
				executor(answer);
			})
			.catch(console.error);
	}
};
const distinct = (value, index, self) => {
	return self.indexOf(value) === index;
};
const tags = async (snippets) => {
	if (snippets && snippets.length > 0) {
		const availableTags = snippets.map((n) => n.tag).filter(distinct);
		if (availableTags && availableTags.length > 0) {
			const response = await prompt([
				{
					type: 'select',
					name: 'tag',
					message: 'Select tag',
					choices: availableTags
				}
			]);

			await tag(snippets, response.tag);
		} else {
			info('no tags');
		}
	} else {
		info('no snippets');
	}
};

export { tag, tags };
