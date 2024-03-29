import React, {useState, createContext, useEffect} from 'react';
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';
import {Appearance} from 'react-native';
//* sections
import createTheme from '../theme';
//* utils
import {THEMES} from '../utils/constant/themeConstant';
import {themeGetItem, themeSetItem} from '../utils/helper/storageOperations';

const initialState = {
  theme: THEMES.DEFAULT.key,
};

const ThemeContext = createContext(initialState);

function ThemeProvider({children}) {
  const [theme, _setTheme] = useState('');

  const setTheme = theme => {
    themeSetItem(theme); // DB'ye kayıt
    _setTheme(theme); // Context'e kayıt
  };

  useEffect(() => {
    const themeInitialSetting = async () => {
      let activeTheme = initialState.theme;
      const storedTheme = await themeGetItem();
      const deviceTheme = Appearance.getColorScheme();

      if (storedTheme) {
        activeTheme = storedTheme;
      } else if (!storedTheme && deviceTheme) {
        activeTheme =
          deviceTheme === 'light' ? THEMES.DEFAULT.key : THEMES.DARK.key;
      }

      setTheme(activeTheme);
    };

    themeInitialSetting();
  }, []);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <EmotionThemeProvider theme={createTheme(theme)}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
}

export {ThemeProvider, ThemeContext};
