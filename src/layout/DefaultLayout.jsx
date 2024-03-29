import React from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../components/core/View';

const StyledDefaultLayout = styled(ViewComp)`
  flex: 1;
  background-color: ${props => props.theme.palette.standard.background};
  padding-vertical: ${props => props.theme.spacing.byHeight(15)};
  padding-horizontal: ${props => props.theme.spacing.byWidth(15)};
`;

const DefaultLayout = props => {
  const {children, ...other} = props;

  return <StyledDefaultLayout {...other}>{children}</StyledDefaultLayout>;
};

export default DefaultLayout;
