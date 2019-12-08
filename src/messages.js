import { red, green, blue, bold } from 'kleur';

const error = err => {
    console.log(bold(red(err)));
}

const success = message => {
    console.log(bold(green(message)));
}

const info = message => {
    console.log(bold(blue(message)));
}

export {error, success, info};