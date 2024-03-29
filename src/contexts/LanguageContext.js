import React, {useState, createContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
//* sections
import i18n from '../i18n/i18n';
//* utils
import {LANGUAGES} from '../utils/constant/languageConstant';
import {
  languageGetItem,
  languageSetItem,
} from '../utils/helper/storageOperations';

const initialState = {
  language: LANGUAGES.en.key,
};

const LanguageContext = createContext(initialState);

function LanguageProvider({children}) {
  const {t} = useTranslation();
  const [language, _setLanguage] = useState('');

  const setLanguage = language => {
    languageSetItem(language); // DB'ye kayıt
    _setLanguage(language); // Context'e kayıt
    i18n.changeLanguage(language); // i18n'ye kayıt
  };

  function translate(word) {
    return t(word);
  }

  useEffect(() => {
    const languageInitialSetting = async () => {
      let activeLanguage = initialState.language;
      const storedLanguage = await languageGetItem();

      if (storedLanguage) {
        activeLanguage = storedLanguage;
      }
      setLanguage(activeLanguage);
    };

    languageInitialSetting();
  }, []);

  return (
    <LanguageContext.Provider
      value={{language, setLanguage, translate: translate}}>
      {children}
    </LanguageContext.Provider>
  );
}

export {LanguageProvider, LanguageContext};
