import React from 'react';
import {ScrollView} from 'react-native';

const ScrollViewComp = props => {
  const {children, ...other} = props;

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} {...other}>
      {children}
    </ScrollView>
  );
};

export default ScrollViewComp;
