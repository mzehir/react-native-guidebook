import React from 'react';
import styled from '@emotion/native';
//* components
import ScrollViewComp from '../core/ScrollView';

const StyledScrollViewDefault = styled(ScrollViewComp)``;

export const CustomScrollViewDefaultComp = props => {
  const {children, ...other} = props;
  return (
    <StyledScrollViewDefault {...other}>{children}</StyledScrollViewDefault>
  );
};
