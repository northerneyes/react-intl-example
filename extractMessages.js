/* eslint-disable no-undef, no-console */
const babel = require('babel-core');
const fs = require('fs');
const glob = require('glob');
const {flatten} = require('lodash');

const asyncFunc = func => (...args) => new Promise((resolve, reject) =>
  func(...args, (error, response) => {
    if (error) reject(error);
    resolve(response);
  })
);

const asyncGlob = asyncFunc(glob);
const asyncWriteFile = asyncFunc(fs.writeFile);

async function getMessages() {
  const getReactIntlMessages = code => babel.transform(code, {
    plugins: ['react-intl'],
    presets: ['es2015-node6/object-rest', 'react', 'stage-2']
  }).metadata['react-intl'].messages;

  const files = await asyncGlob('src/**/*.js');

  console.log('Read `src/**/*.js`');
  const length = files.length;
  console.log(`Received ${length} files`);
  const messages = flatten(files.map((filePath, index) => {
    const file = fs.readFileSync(filePath);
    const code = file.toString();
    const intlMessages = getReactIntlMessages(code);
    process.stdout.clearLine();  // clear current text
    process.stdout.write(`Processing ${index}/${length - 1}, ${filePath}\r`);
    return intlMessages;
  }));

  console.log('Processing finished');
  console.log('Saving messages...');

  messages.sort((a, b) => a.id.localeCompare(b.id));
  const eslintDisable = '/* eslint-disable max-len, quote-props, quotes */';
  const json = JSON.stringify(messages, null, 2);
  // ES6 allows us to use multiline strings and eslint.
  const es6code = `${eslintDisable}\nexport default ${json};\n`;
  const messageDir = 'messages/_default.js';
  await asyncWriteFile(messageDir, es6code);
  console.log(`Messages are saved to \`${messageDir}\`!`);
}

getMessages();
