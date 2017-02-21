/* eslint-disable no-undef, no-console */
require('babel-register')({
  presets: [
    ['env', {targets: {node: true}}]
  ]
});
const fs = require('fs');

const loadMessages = require('./src/server/intl/loadMessages').default;

const messages = loadMessages();

fs.writeFile('messages/all.json', JSON.stringify(messages), error => {
  if (!error) console.log('Messages are saved');
});

