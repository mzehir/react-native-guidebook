import React from 'react';
import {TouchableOpacity} from 'react-native';

const TouchableOpacityComp = props => {
  const {children, ...other} = props;

  return <TouchableOpacity {...other}>{children}</TouchableOpacity>;
};

export default TouchableOpacityComp;
