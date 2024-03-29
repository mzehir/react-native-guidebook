import React from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../core/View';
import CustomTextComp from './CustomText';

const Container = styled(ViewComp)`
  flex-direction: row;
  align-items: center;
`;

const Divider = styled(ViewComp)`
  flex: 1;
  height: 1px;
  background-color: ${props => props.theme.palette.standard.borderColor};
`;

const CustomDividerWithTextComp = ({text}) => {
  return (
    <Container>
      <Divider style={{marginRight: 10}} />
      <CustomTextComp>{text}</CustomTextComp>
      <Divider style={{marginLeft: 10}} />
    </Container>
  );
};

export default CustomDividerWithTextComp;
