import React from 'react';
import {TextInput} from 'react-native';

const TextInputComp = props => {
  const {...other} = props;

  return <TextInput {...other} />;
};

export default TextInputComp;
