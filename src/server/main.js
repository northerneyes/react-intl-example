import React from 'react';

import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import express from 'express';

import loadMessages from './intl/loadMessages';
import createStore from '../common/store';
import App from '../browser/components/App.react';
import Html from './Html';

const app = express();
app.use('/assets', express.static('dist', {maxAge: '200d'}));

const messages = loadMessages();

function getInitialState(req) {
  const config = {
    locales: ['en', 'ru'],
    defaultLocale: 'en'
  };

  const currentLocale = req.acceptsLanguages(config.locales) || config.defaultLocale;

  return {
    intl: {
      currentLocale,
      defaultLocale: config.defaultLocale,
      initialNow: Date.now(),
      locales: config.locales,
      messages
    }
  };
}

function render(req, res) {
  const initialState = getInitialState(req);
  const store = createStore(initialState);

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const markup = ReactDOMServer.renderToString(<Html html={html} state={store.getState()} />);
  res.status(200).send(`<!DOCTYPE html>${markup}`);
}

app.get('*', render);

app.listen(8000, () => console.log('server started'));
