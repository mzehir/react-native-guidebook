import React, {useState} from 'react';
import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import {TouchableOpacity} from 'react-native';
import LanguageUseContext from '../../hooks/LanguageUseContext';
//* components
import ViewComp from '../core/View';
import TextInputComp from '../core/TextInput';
import {MaterialCommunityIconsDefaultComp} from './Icons';
//* utils
import {COLORS} from '../../utils/constant/app/colorConstant';
import {SIZES} from '../../utils/constant/app/sizeConstant';
import {
  ICON_POSITION,
  ICON_SIZES,
} from '../../utils/constant/app/iconSizeConstant';
import {
  KEYBOARD_TYPES,
  TYPES_OF_USE,
} from '../../utils/constant/app/textInputConstants';

const Container = styled(ViewComp)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-radius: 8px;

  height: ${props =>
    props.size === SIZES.small.value
      ? '35px'
      : props.size === SIZES.medium.value
      ? '45px'
      : '50px'};

  padding-horizontal: ${props =>
    props.size === SIZES.small.value
      ? '6px'
      : props.size === SIZES.medium.value
      ? '8px'
      : '10px'};

  border-color: ${props =>
    props.isFocus && props.color === COLORS.STANDARD.value
      ? props.theme.palette.app.components.input.borderColorFocus
      : props.isFocus
      ? props.theme.palette[props.color].borderColor
      : props.theme.palette.app.components.input.borderColor};
`;

const StyledTextInput = styled(TextInputComp)`
  flex: 1;

  padding: 0;

  color: ${props => props.theme.palette.standard.color};

  font-size: ${props =>
    props.theme.typography.forTextInput[props.size].fontSize + `px`};

  font-weight: ${props =>
    props.theme.typography.forTextInput[props.size].fontWeight};
`;

const CustomTextInput = ({
  keyboardType = KEYBOARD_TYPES.default.value,
  typeOfUse = TYPES_OF_USE.default.value,
  size = SIZES.small.value,
  color = COLORS.STANDARD.value,
  placeholder = 'common.enterText',
  iconFields,
  isTranslate = true,
  disabled = false,
  focus = false,
  text,
  setText,
}) => {
  const themeHook = useTheme();
  const {translate} = LanguageUseContext();
  const iconSize = ICON_SIZES[size].size;

  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(focus);

  return (
    <Container isFocus={isFocused} color={color} size={size}>
      {typeOfUse === TYPES_OF_USE.default.value &&
        iconFields?.component &&
        iconFields?.position === ICON_POSITION.start.value && (
          <iconFields.component
            style={{marginRight: 3}}
            name={iconFields.name}
            size={iconSize}
          />
        )}

      <StyledTextInput
        size={size}
        keyboardType={keyboardType}
        placeholder={
          (isTranslate = true ? translate(placeholder) : placeholder)
        }
        placeholderTextColor={
          themeHook.palette.app.components.input.placeholderColor
        }
        value={text}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setText}
        secureTextEntry={
          typeOfUse === TYPES_OF_USE.password.value && !showPassword
        }
        editable={!disabled}
      />

      {typeOfUse === TYPES_OF_USE.search.value && text !== '' && (
        <TouchableOpacity onPress={() => setText('')}>
          <MaterialCommunityIconsDefaultComp
            style={{marginLeft: 3}}
            name="close"
            size={iconSize}
          />
        </TouchableOpacity>
      )}

      {typeOfUse === TYPES_OF_USE.password.value && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <MaterialCommunityIconsDefaultComp
            style={{marginLeft: 3}}
            name={showPassword ? 'eye-off' : 'eye'}
            size={iconSize}
          />
        </TouchableOpacity>
      )}

      {typeOfUse === TYPES_OF_USE.default.value &&
        iconFields?.component &&
        iconFields?.position === ICON_POSITION.end.value && (
          <iconFields.component
            style={{marginLeft: 3}}
            name={iconFields.name}
            size={iconSize}
          />
        )}
    </Container>
  );
};

export default CustomTextInput;
