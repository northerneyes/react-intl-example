import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'ramda';
import styled from 'styled-components';

import {setCurrentLocale} from '../../common/intl/intl.actions';

const Button = styled.button`
  background: ${props => (props.primary ? '#337ab7' : 'white')};
  color: ${props => (props.primary ? 'white' : '#337ab7')};

  font-size: 2em;
  margin: 1em;
  padding: 0.45em 3em;
  border: 2px solid #337ab7;
  border-radius: 3px;
`;

const SwitchLocale = ({currentLocale, locales, setCurrentLocale}) => (
  <div>
    {locales.map(locale => (
      <Button
        key={locale}
        primary={currentLocale === locale}
        onClick={() => setCurrentLocale(locale)}>
        {locale}
      </Button>
    ))}
  </div>
);

SwitchLocale.propTypes = {
  currentLocale: React.PropTypes.string.isRequired,
  locales: React.PropTypes.array.isRequired,
  setCurrentLocale: React.PropTypes.func.isRequired
};

export default compose(
  connect(
    state => ({
      currentLocale: state.intl.currentLocale,
      locales: state.intl.locales
    }),
    {setCurrentLocale}
  ),
)(SwitchLocale);
