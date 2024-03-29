export const LANGUAGES = {
  en: {key: 'en', label: 'common.english'},
  tr: {key: 'tr', label: 'common.turkish'},
  de: {key: 'de', label: 'common.german'},
};

export const getLanguagesConstantAsArray = () => {
  return Object.values(LANGUAGES);
};
