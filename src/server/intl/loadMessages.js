import fs from 'fs';

const descriptorsToMessages = descriptors =>
  descriptors.reduce((previous, {defaultMessage, id}) => ({
    ...previous, [id]: defaultMessage
  }), {});

export default function loadMessages({includeDefault = false} = {}) {
  return fs.readdirSync('messages')
    .filter(fileName => (includeDefault || !fileName.startsWith('_')) && fileName.split('.')[1] !== 'json')
    .map(fileName => ({
      descriptors: require(`../../../messages/${fileName}`).default, // eslint-disable-line import/no-dynamic-require
      locale: fileName.split('.')[0]
    }))
    .reduce((previous, {descriptors, locale}) => ({
      ...previous, [locale]: descriptorsToMessages(descriptors)
    }), {});
}
