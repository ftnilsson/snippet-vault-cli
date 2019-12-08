const { red, white, blue, green, bold } = require('kleur');
const boxen = require('boxen');
const help = async () => {
    const h = `
    ${bold(white('Usage:                                                            '))}
    ${bold(white('-------------------------------------------------------------------'))}
    ${bold(green('snv <command> [options]                                           '))}
    ${bold(white('-------------------------------------------------------------------'))}
    ${bold(blue('help   '))}\t${white('   --help            show help               ')}                  
    ${bold(blue('add    '))}\t${white('-a --add             add snippet             ')}                     
    ${bold(blue('search '))}\t${white('-s --search [term]   search snippets         ')}       
    ${bold(blue('tag    '))}\t${white('-t --tag <tag>       shows tagged snippets   ')}
    ${bold(blue('version'))}\t${white('-v --version         current version         ')}    
    ${bold(white('-------------------------------------------------------------------'))}   
    `;

	console.log(boxen(h));
};

export default help;
