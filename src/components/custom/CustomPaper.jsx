import React from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../core/View';

const Container = styled(ViewComp)`
  background-color: ${props =>
    props.theme.palette.app.components.paper.background};

  ${props =>
    props.paddingHorizontal &&
    `padding-horizontal: ${props.paddingHorizontal}px;`}

  ${props =>
    props.paddingVertical && `padding-vertical: ${props.paddingVertical}px;`}

  border-radius: 6px;
  shadow-color: #32325d;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.024;
  shadow-radius: 5px;
  elevation: 1;
  transition-property: 'box-shadow';
  transition-duration: '300ms';
  transition-timing-function: 'cubic-bezier(0.4, 0, 0.2, 1)';
`;

const CustomPaperComp = props => {
  const {children} = props;

  return (
    <Container
      paddingHorizontal={props.paddingHorizontal}
      paddingVertical={props.paddingVertical}>
      {children}
    </Container>
  );
};

export default CustomPaperComp;
