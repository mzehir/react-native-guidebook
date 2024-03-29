import React from 'react';
import {View} from 'react-native';

const ViewComp = props => {
  const {children, ...other} = props;

  return <View {...other}>{children}</View>;
};

export default ViewComp;
