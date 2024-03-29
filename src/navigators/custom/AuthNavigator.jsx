import React from 'react';
import {useTheme} from '@emotion/react';
import StackNavigator from '../stack/Stack';
//* utils
import {getAuthNavigatorsConstantAsArray} from '../../utils/constant/navigatorAuthConstant';

const {initialRouteName, screens} = getAuthNavigatorsConstantAsArray();

const AuthNavigator = () => {
  const themeHook = useTheme();

  let screenOptions = {
    headerStyle: {
      backgroundColor: themeHook.appBar.background,
    },
  };

  return (
    <StackNavigator
      initialRouteName={initialRouteName}
      screens={screens}
      screenOptions={screenOptions}
    />
  );
};

export default AuthNavigator;
