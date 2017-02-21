import React from 'react';
import {configure, addDecorator, setAddon} from '@kadira/storybook';
import IntlAddon from 'react-storybook-addon-intl';

import Wrapper from './Wrapper';

const Decorator = story => (
  <Wrapper>
    {story()}
  </Wrapper>
);

const req = require.context('../src/browser/', true, /.story.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(Decorator);
setAddon(IntlAddon); // set addon
configure(loadStories, module);

