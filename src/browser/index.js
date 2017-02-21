require('intl');
require('intl/locale-data/jsonp/cs.js');
require('intl/locale-data/jsonp/de.js');

const {addLocaleData} = require('react-intl');
const en = require('react-intl/locale-data/en');
const ru = require('react-intl/locale-data/ru');

[en, ru].forEach(locale => addLocaleData(locale));

require('./main');
