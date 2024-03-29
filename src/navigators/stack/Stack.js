import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = ({initialRouteName, screens, screenOptions = {}}) => {
  const navigationHook = useNavigation();
  const {headerLeft, headerRight, ...otherScreenOptions} = screenOptions;

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        ...otherScreenOptions,

        ...(headerLeft
          ? {
              headerLeft: props => headerLeft(props, navigationHook),
            }
          : {}),

        ...(headerRight
          ? {
              headerRight: () => headerRight(),
            }
          : {}),
      }}>
      {screens.map((item, index) => (
        <Stack.Screen
          key={index.toString()}
          name={item.name}
          {...(item.initialParams ? {initialParams: item.initialParams} : {})}
          options={{
            ...(item.options?.title ? {title: item.options.title} : {}),

            ...(typeof item.options?.headerShown === 'boolean'
              ? {headerShown: item.options.headerShown}
              : {}),

            ...(item.options?.headerTitle
              ? {headerTitle: props => item.options.headerTitle(props)}
              : {}),

            ...(item.options?.headerLeft
              ? {headerLeft: props => item.options.headerLeft(props)}
              : {}),
          }}>
          {props => item.component(props)}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
