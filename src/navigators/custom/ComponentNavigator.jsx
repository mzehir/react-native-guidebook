import React from 'react';
import {useTheme} from '@emotion/react';
import StackNavigator from '../stack/Stack';
import AccessToGlobalSettingsUseContext from '../../hooks/AccessToGlobalSettingsUseContext';
//* components
import {MaterialIconsDefaultComp} from '../../components/custom/Icons';
import TouchableOpacityComp from '../../components/core/TouchableOpacity';
//* utils
import {ICON_SIZES} from '../../utils/constant/app/iconSizeConstant';
import {
  COMPONENT_NAVIGATORS,
  getComponentNavigatorsConstantAsArray,
} from '../../utils/constant/navigatorComponentConstant';

const {initialRouteName, screens} = getComponentNavigatorsConstantAsArray();

const ComponentNavigator = () => {
  const themeHook = useTheme();
  const {setSettingsModalVisible} = AccessToGlobalSettingsUseContext();

  let screenOptions = {
    headerStyle: {
      backgroundColor: themeHook.appBar.background,
    },
    headerBackVisible: false,
    headerLeft: (navigation, navigationHook) => {
      return navigation.canGoBack ? (
        <TouchableOpacityComp
          onPress={() =>
            navigationHook.navigate(COMPONENT_NAVIGATORS.COMPONENTS.name)
          }
          style={{marginRight: 10}}>
          <MaterialIconsDefaultComp
            name="arrow-back"
            size={ICON_SIZES.medium.size}
          />
        </TouchableOpacityComp>
      ) : null;
    },

    headerRight: () => (
      <TouchableOpacityComp onPress={() => setSettingsModalVisible()}>
        <MaterialIconsDefaultComp
          name="settings"
          size={ICON_SIZES.medium.size}
        />
      </TouchableOpacityComp>
    ),
  };

  return (
    <StackNavigator
      initialRouteName={initialRouteName}
      screens={screens}
      screenOptions={screenOptions}
    />
  );
};

export default ComponentNavigator;
