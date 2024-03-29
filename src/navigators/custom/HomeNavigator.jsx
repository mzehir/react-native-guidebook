import React from 'react';
import {useTheme} from '@emotion/react';
import TabNavigator from '../tab/Tab';
import AccessToGlobalSettingsUseContext from '../../hooks/AccessToGlobalSettingsUseContext';
//* components
import TouchableOpacityComp from '../../components/core/TouchableOpacity';
import {MaterialIconsDefaultComp} from '../../components/custom/Icons';
//* utils
import {getHomeNavigatorsConstantAsArray} from '../../utils/constant/navigatorHomeConstant';
import {ICON_SIZES} from '../../utils/constant/app/iconSizeConstant';

const {initialRouteName, screens} = getHomeNavigatorsConstantAsArray();

const HomeNavigator = () => {
  const themeHook = useTheme();
  const {setSettingsModalVisible} = AccessToGlobalSettingsUseContext();

  const screenOptions = {
    tabBarShowLabel: false,
    headerStyle: {
      backgroundColor: themeHook.appBar.background,
    },
    tabBarStyle: {
      backgroundColor: themeHook.bottomTab.background,
    },

    headerRight: () => (
      <TouchableOpacityComp
        onPress={() => setSettingsModalVisible()}
        style={{marginRight: 10}}>
        <MaterialIconsDefaultComp
          name="settings"
          size={ICON_SIZES.medium.size}
        />
      </TouchableOpacityComp>
    ),
  };

  return (
    <TabNavigator
      initialRouteName={initialRouteName}
      screens={screens}
      screenOptions={screenOptions}
    />
  );
};

export default HomeNavigator;
