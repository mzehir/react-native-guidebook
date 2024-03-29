import React from 'react';
import styled from '@emotion/native';
//* components
import TouchableOpacityComp from '../core/TouchableOpacity';
import ViewComp from '../core/View';
import {MaterialIconsDefaultComp} from './Icons';
//* utils
import {COLORS} from '../../utils/constant/app/colorConstant';
import {SIZES} from '../../utils/constant/app/sizeConstant';

const StyledTouchableOpacity = styled(TouchableOpacityComp)`
  width: ${props => {
    switch (props.size) {
      case SIZES.small.value:
        return '24px';
      case SIZES.medium.value:
        return '32px';
      default:
        return '42px';
    }
  }};

  height: ${props => {
    switch (props.size) {
      case SIZES.small.value:
        return '24px';
      case SIZES.medium.value:
        return '32px';
      default:
        return '42px';
    }
  }};

  justify-content: center;

  align-items: center;

  border-radius: 2px;

  border-width: 2px;

  border-color: ${props =>
    props.color === COLORS.STANDARD.value
      ? props.theme.palette.standard.borderColor
      : props.checked
      ? props.theme.palette[props.color].background
      : props.theme.palette.standard.borderColor};

  background-color: ${props =>
    props.color === COLORS.STANDARD.value && props.checked
      ? props.theme.palette.standard.borderColor
      : props.checked
      ? props.theme.palette[props.color].background
      : 'transparent'};
`;

const IconWrapper = styled(ViewComp)`
  background-color: ${props =>
    props.color === COLORS.STANDARD.value
      ? props.theme.palette.standard.borderColor
      : props.theme.palette[props.color].background};
`;

const CustomCheckboxComp = ({
  checked,
  onChange,
  color = COLORS.STANDARD.value,
  size = SIZES.small.value,
}) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <StyledTouchableOpacity
      size={size}
      checked={checked}
      color={color}
      onPress={handleToggle}>
      {checked && (
        <IconWrapper color={color}>
          <MaterialIconsDefaultComp
            name="check"
            size={
              size === SIZES.small.value
                ? 15
                : size === SIZES.medium.value
                ? 21
                : 27
            }
            colorGroup={COLORS.STANDARD.value}
            color="background"
          />
        </IconWrapper>
      )}
    </StyledTouchableOpacity>
  );
};

export default CustomCheckboxComp;
