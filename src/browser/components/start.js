import React from 'react';
import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';

export default function start(Wrapped) {
  class Start extends React.Component {

    static propTypes = {
      intl: React.PropTypes.object.isRequired
    };

    render() {
      const {intl} = this.props;
      const {currentLocale} = intl;

      return (
        <IntlProvider
          defaultLocale={intl.defaultLocale}
          key={currentLocale} // https://github.com/yahoo/react-intl/issues/234
          locale={currentLocale}
          messages={intl.messages[currentLocale]}>
          <Wrapped {...this.props} />
        </IntlProvider>
      );
    }

  }

  return connect(state => ({
    intl: state.intl
  }))(Start);
}
