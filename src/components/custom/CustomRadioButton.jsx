import React from 'react';
import styled from '@emotion/native';
//* components
import TouchableOpacityComp from '../core/TouchableOpacity';
import ViewComp from '../core/View';
//* utils
import {COLORS} from '../../utils/constant/app/colorConstant';
import {SIZES} from '../../utils/constant/app/sizeConstant';

const Wrapper = styled(ViewComp)`
  align-items: center;
  justify-content: center;
  border-width: 2px;

  border-color: ${props =>
    props.color === COLORS.STANDARD.value
      ? props.theme.palette[COLORS.STANDARD.value].borderColor
      : props.theme.palette[props.color].background};

  width: ${props =>
    props.size === SIZES.small.value
      ? '20px'
      : props.size === SIZES.medium.value
      ? '24px'
      : '28px'};

  height: ${props =>
    props.size === SIZES.small.value
      ? '20px'
      : props.size === SIZES.medium.value
      ? '24px'
      : '28px'};

  border-radius: ${props =>
    props.size === SIZES.small.value
      ? '10px'
      : props.size === SIZES.medium.value
      ? '12px'
      : '14px'};
`;

const InnerDot = styled(ViewComp)`
  background-color: ${props =>
    props.color === COLORS.STANDARD.value
      ? props.theme.palette[COLORS.STANDARD.value].borderColor
      : props.theme.palette[props.color].background};

  width: ${props =>
    props.size === SIZES.small.value
      ? '10px'
      : props.size === SIZES.medium.value
      ? '12px'
      : '14px'};

  height: ${props =>
    props.size === SIZES.small.value
      ? '10px'
      : props.size === SIZES.medium.value
      ? '12px'
      : '14px'};

  border-radius: ${props =>
    props.size === SIZES.small.value
      ? '5px'
      : props.size === SIZES.medium.value
      ? '6px'
      : '7px'};
`;

const CustomRadioButton = ({
  color = COLORS.STANDARD.value,
  size = SIZES.small.value,
  active,
  onPress,
}) => {
  return (
    <TouchableOpacityComp onPress={onPress}>
      <Wrapper color={color} size={size} active={active}>
        {active && <InnerDot color={color} size={size} />}
      </Wrapper>
    </TouchableOpacityComp>
  );
};

export default CustomRadioButton;
