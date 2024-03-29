import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import BootSplash from 'react-native-bootsplash';
//* sections
import AuthNavigator from './custom/AuthNavigator';

const Navigator = () => {
  return (
    <NavigationContainer
      // onReady={() => {
      //   BootSplash.hide();
      // }}
      >
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
