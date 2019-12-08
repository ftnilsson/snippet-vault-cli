#Snippet-vault-cli


##Getting started

Clone the repository and cd to checkout diretory.

npm

    npm install
    npm link

yarn

    yarn install
    yarn link

if you want to change the *"snv"* command, edit package.json and run the link command again.

    "bin": {
        "snv": "./index.js"
    }

##Using

**Usage: snv [options]**

**Options:**
  -a, --add                  *add snippet*
  -s, --search <searchterm>  *search snippets*
  -t, --tag [tagname]        *search tag*
  -v, --vers                 *display version number*
  -h, --help                 *output usage* information*

###Demo

##ToDo
* combine usage of [snippet-vault](https://github.com/ftnilsson/snippet-vault) and snippet-vault-cli
* use .env
* create npm package/ or installer

