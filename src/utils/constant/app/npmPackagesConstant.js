const NPM_DEPENDENCIES = {
  package1: {
    name: '@emotion/native',
    version: '^11.11.0',
    description: 'npmDependencies.emotionNativeDescription',
    npmLink: 'https://www.npmjs.com/package/@emotion/native',
  },

  package2: {
    name: '@emotion/react',
    version: '^11.11.3',
    description: 'npmDependencies.emotionReactDescription',
    npmLink: 'https://www.npmjs.com/package/@emotion/react',
  },

  package3: {
    name: '@react-native-async-storage/async-storage',
    version: '^1.22.0',
    description:
      'npmDependencies.reactNativeAsyncStorageAsyncStorageDescription',
    npmLink: 'https://www.npmjs.com/package/@react-native-async-storage/async-storage',
  },

  package4: {
    name: '@react-navigation/bottom-tabs',
    version: '^6.5.12',
    description: 'npmDependencies.reactNavigationBottomTabsDescription',
    npmLink: 'https://www.npmjs.com/package/@react-navigation/bottom-tabs',
  },

  package5: {
    name: '@react-navigation/native',
    version: '^6.1.10',
    description: 'npmDependencies.reactNavigationNativeDescription',
    npmLink: 'https://www.npmjs.com/package/@react-navigation/native',
  },

  package6: {
    name: '@react-navigation/native-stack',
    version: '^6.9.18',
    description: 'npmDependencies.reactNavigationNativeStackDescription',
    npmLink: 'https://www.npmjs.com/package/@react-navigation/native-stack',
  },

  package7: {
    name: '@reduxjs/toolkit',
    version: '^2.2.1',
    description: 'npmDependencies.reduxjsToolkitDescription',
    npmLink: 'https://www.npmjs.com/package/@reduxjs/toolkit',
  },

  package8: {
    name: 'i18next',
    version: '^23.9.0"',
    description: 'npmDependencies.i18NextDescription',
    npmLink: 'https://www.npmjs.com/package/i18next',
  },

  package9: {
    name: 'react',
    version: '18.2.0',
    description: 'npmDependencies.reactDescription',
    npmLink: 'https://www.npmjs.com/package/react',
  },

  package10: {
    name: 'react-i18next',
    version: '^14.0.5',
    description: 'npmDependencies.reactI18nextDescription',
    npmLink: 'https://www.npmjs.com/package/react-i18next',
  },

  package11: {
    name: 'react-native',
    version: '0.73.5',
    description: 'npmDependencies.reactNativeDescription',
    npmLink: 'https://www.npmjs.com/package/react-native',
  },

  package12: {
    name: 'react-native-element-dropdown',
    version: '^2.10.1',
    description: 'npmDependencies.reactNativeElementDropdownDescription',
    npmLink: 'https://www.npmjs.com/package/react-native-element-dropdown',
  },

  package13: {
    name: 'react-native-safe-area-context',
    version: '^4.9.0',
    description: 'npmDependencies.reactNativeSafeAreaContextDescription',
    npmLink: 'https://www.npmjs.com/package/react-native-safe-area-context',
  },

  package14: {
    name: 'react-native-screens',
    version: '^3.29.0',
    description: 'npmDependencies.reactNativeScreens',
    npmLink: 'https://www.npmjs.com/package/react-native-screens',
  },

  package15: {
    name: 'react-native-svg',
    version: '^14.1.0',
    description: 'npmDependencies.reactNativeSvgDescription',
    npmLink: 'https://www.npmjs.com/package/react-native-svg',
  },

  package16: {
    name: 'react-native-svg-transformer',
    version: '^1.3.0',
    description: 'npmDependencies.reactNativeSvgTransformerDescription',
    npmLink: 'https://www.npmjs.com/package/react-native-svg-transformer',
  },

  package17: {
    name: 'react-native-vector-icons',
    version: '^10.0.3',
    description: 'npmDependencies.reactNativeVectorIconsDescription',
    npmLink: 'https://www.npmjs.com/package/react-native-vector-icons',
  },

  package18: {
    name: 'react-redux',
    version: '^9.1.0',
    description: 'npmDependencies.reactReduxDescription',
    npmLink: 'https://www.npmjs.com/package/react-redux',
  },
};

export const getNpmDependenciesConstantAsArray = () => {
  let dependencies = Object.values(NPM_DEPENDENCIES);
  let dependenciesTitle = 'Npm Packages(dependencies)';

  return {dependenciesTitle, dependencies};
};
