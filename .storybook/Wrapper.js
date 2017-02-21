import React from 'react';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';

import createStore from '../src/common/store';
import messages from '../messages/all.json';

const store = createStore({
  intl: {
    locales: ['en', 'ru'],
    messages
  }
});

const Wrapper = ({children}) => (
  <IntlProvider locale="en">
    <Provider store={store}>
      {children}
    </Provider>
  </IntlProvider>
);

Wrapper.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Wrapper;
