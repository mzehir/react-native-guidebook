import React from 'react';
import styled from '@emotion/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StyledMaterialIconsDefaultComp = styled(MaterialIcons)`
  color: ${props =>
    props.colorGroup
      ? props.theme.palette[props.colorGroup][props.color]
      : props.active
      ? props.theme.palette.app.components.icon.activeColor
      : props.theme.palette.app.components.icon.color};
`;

export const MaterialIconsDefaultComp = ({
  name,
  size,
  active = true,
  colorGroup,
  color,
  ...props
}) => {
  return (
    <StyledMaterialIconsDefaultComp
      name={name}
      size={size}
      active={active}
      colorGroup={colorGroup}
      color={color}
      {...props}
    />
  );
};

// *********************************************************************************************

const StyledMaterialCommunityIconsDefaultComp = styled(MaterialCommunityIcons)`
  color: ${props =>
    props.colorGroup
      ? props.theme.palette[props.colorGroup][props.color]
      : props.active
      ? props.theme.palette.app.components.icon.activeColor
      : props.theme.palette.app.components.icon.color};
`;

export const MaterialCommunityIconsDefaultComp = ({
  name,
  size,
  active = true,
  colorGroup,
  color,
  ...props
}) => {
  return (
    <StyledMaterialCommunityIconsDefaultComp
      name={name}
      size={size}
      active={active}
      colorGroup={colorGroup}
      color={color}
      {...props}
    />
  );
};
