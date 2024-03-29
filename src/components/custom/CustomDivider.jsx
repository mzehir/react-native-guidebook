import React from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../core/View';

const Divider = styled(ViewComp)`
  height: 1px;
  background-color: ${props => props.theme.palette.standard.borderColor};
`;

const CustomDividerComp = () => {
  return <Divider />;
};

export default CustomDividerComp;
