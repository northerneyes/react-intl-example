import React from 'react';
import styled from 'styled-components';
import {FormattedMessage, FormattedDate, FormattedNumber, defineMessages} from 'react-intl';

import SwitchLocale from './SwitchLocale.react';
import start from './start';

const Content = styled.div`
  text-size-adjust: none;
  text-align: center;
  font-family: helvetica, arial, sans-serif;
  line-height: 200%;
  padding: 6px 20px 30px;
`;

export const msg = defineMessages({
  welcome: {
    id: 'welcome',
    defaultMessage: `Hello {name}, you have {unreadCount, number} {unreadCount, plural,
      one {message}
      other {messages}
    }`
  }
});

export const App = () => (
  <Content>
    <h1>
      <FormattedMessage
        {...msg.welcome}
        values={{name: <b>Eric</b>, unreadCount: 25}}
      />
    </h1>
    <h1>
      <FormattedDate
        value={Date.now()}
        day="numeric"
        month="long"
        year="numeric"
      />
    </h1>
    <h1>
      <FormattedNumber
        value={1000}
        style="currency"
        currency="EUR"
      />
    </h1>
    <SwitchLocale />
  </Content>
);

export default start(App);
