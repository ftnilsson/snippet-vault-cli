const boxen = require('boxen');
const version = () => {
	const packageJson = require('../package.json');

	console.log(boxen(packageJson.version, { padding: 1, borderColor: 'blue' }));
};

export default version;
