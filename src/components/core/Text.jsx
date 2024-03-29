import React from 'react';
import {Text} from 'react-native';
import LanguageUseContext from '../../hooks/LanguageUseContext';

const TextComp = props => {
  const {children, isTranslate = true, ...other} = props;
  const {translate} = LanguageUseContext();

  const childrenTranslate = children => {
    let result = [];
    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; i++) {
        if (typeof children[i] === 'string') {
          result.push(translate(children[i]));
        } else {
          result.push(children[i]);
        }
      }
    } else {
      if (typeof children === 'string') {
        result.push(translate(children));
      } else {
        result.push(children);
      }
    }

    return result;
  };

  return (
    <Text {...other}>
      {isTranslate ? childrenTranslate(children) : children}
    </Text>
  );
};

export default TextComp;
