export const THEMES = {
  DEFAULT: {key: 'DEFAULT', label: 'DEFAULT', svgName: 'light-mode'},
  DARK: {key: 'DARK', label: 'DARK', svgName: 'dark-mode'},
};

export const getThemesConstantAsArray = () => {
  return Object.values(THEMES);
};
