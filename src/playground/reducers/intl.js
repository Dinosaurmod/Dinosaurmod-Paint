import {addLocaleData} from 'react-intl';
import {updateIntl as superUpdateIntl} from 'react-intl-redux';
import {IntlProvider, intlReducer} from 'react-intl-redux';

import localeData from 'scratch-l10n';
//import paintMessages from 'scratch-l10n/locales/paint-editor-msgs';
import paintMessages from '../../translations/index.js';

import englishMessages from '../../translations/en.json'

Object.keys(localeData).forEach(locale => {
    // TODO: will need to handle locales not in the default intl - see www/custom-locales
    console.log(localeData)
    console.log(locale)
    console.log(localeData[locale])
    addLocaleData(localeData[locale].localeData);
});

const intlInitialState = {
    intl: {
        defaultLocale: 'en',
        locale: 'en',
        messages: englishMessages//paintMessages.en.messages
    }
};

const updateIntl = locale => superUpdateIntl({
    locale: locale,
    messages: paintMessages[locale]/*.messages*/ || englishMessages//paintMessages.en.messages
});

export {
    intlReducer as default,
    IntlProvider,
    intlInitialState,
    updateIntl
};
