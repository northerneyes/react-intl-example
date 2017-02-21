import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {App} from './App.react';

import {addLocaleData} from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import en from 'react-intl/locale-data/en';
import messages from '../../../messages/all.json';

[en, ru].forEach(locale => addLocaleData(locale));

storiesOf('App', module)
  .addWithIntl('Localizable App', () => (<App />), messages)
  .add('App', () => (<App />));
