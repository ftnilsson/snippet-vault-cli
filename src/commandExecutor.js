const spawn = require('child_process').spawn;

const execute = (command) => {
	const child = spawn(command, {
		stdio: 'inherit',
		shell: true
	});
};

export default execute;
