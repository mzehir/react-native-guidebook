import React from 'react';
import {useTheme} from '@emotion/react';
import {StatusBar} from 'react-native';
import ThemeUseContext from '../../hooks/ThemeUseContext';
import {THEMES} from '../../utils/constant/themeConstant';

const StatusBarComp = () => {
  const {theme} = ThemeUseContext();
  const themeHook = useTheme();

  return (
    <StatusBar
      animated={true}
      backgroundColor={themeHook.statusBar.background}
      barStyle={theme === THEMES.DEFAULT.key ? 'light-content' : 'light-content'}
      showHideTransition="fade"
      hidden={false}
    />
  );
};

export default StatusBarComp;
