import React, {useState} from 'react';
import {useTheme} from '@emotion/react';
import {Dropdown} from 'react-native-element-dropdown';
//* components
import ViewComp from '../View';
//* utils
import {SIZES} from '../../../utils/constant/app/sizeConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';

const ReactNativeElementDropdown = ({
  data = [], //* [{label: "", value: ""}]
  value = '',
  setValue,
  size = SIZES.small.value,
  color = COLORS.STANDARD.value,
  focus = false,
  mode = 'default', //* auto || default || modal
  dropdownPosition = 'auto', //* auto || top ||bottom
  disable = false,
  placeholder = 'Bir değer seç',
  searchPlaceholder = 'Bir değer ara',
  search = true,
  maxHeight = 300,
}) => {
  const themeHook = useTheme();
  const [isFocus, setIsFocus] = useState(focus);

  const style = {
    height:
      size === SIZES.small.value ? 35 : size === SIZES.medium.value ? 45 : 50,

    paddingHorizontal:
      size === SIZES.small.value ? 6 : size === SIZES.medium.value ? 8 : 10,

    backgroundColor:
      themeHook.palette.app.components.elementDropdown.inputBackground,

    borderColor:
      isFocus && color === COLORS.STANDARD.value
        ? themeHook.palette.app.components.elementDropdown.inputBorderColorFocus
        : isFocus
        ? themeHook.palette[color].borderColor
        : themeHook.palette.app.components.elementDropdown.inputBorderColor,

    borderWidth: 1,
    borderRadius: 8,
  };

  const placeholderStyle = {
    fontSize: themeHook.typography.forSelect[size].fontSize,
    fontWeight: themeHook.typography.forSelect[size].fontWeight,
    color: themeHook.palette.app.components.elementDropdown.placeholderColor,
  };

  const selectedTextStyle = {
    fontSize: themeHook.typography.forSelect[size].fontSize,
    fontWeight: themeHook.typography.forSelect[size].fontWeight,
    color: themeHook.palette.app.components.elementDropdown.textColor,
  };

  const containerStyle = {
    borderWidth: 0,
    backgroundColor:
      themeHook.palette.app.components.elementDropdown.menuBackground,
  };

  const inputSearchStyle = {
    height:
      size === SIZES.small.value ? 30 : size === SIZES.medium.value ? 35 : 40,
    padding: 0,
    fontSize: themeHook.typography.forSelect[size].fontSize,
    fontWeight: themeHook.typography.forSelect[size].fontWeight,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor:
      themeHook.palette.app.components.elementDropdown.inputBorderColor,
    color: themeHook.palette.app.components.elementDropdown.placeholderColor,
  };

  const itemTextStyle = {
    fontSize: themeHook.typography.forSelect[size].fontSize,
    fontWeight: themeHook.typography.forSelect[size].fontWeight,
    color: themeHook.palette.app.components.elementDropdown.textColor,
    margin: -10,
  };

  const activeColor =
    themeHook.palette.app.components.elementDropdown.activeItemBackground;

  const iconStyle = {
    marginRight: 5,
  };

  return (
    <ViewComp style={{width: '100%'}}>
      <Dropdown
        style={style}
        placeholderStyle={placeholderStyle}
        selectedTextStyle={selectedTextStyle}
        containerStyle={containerStyle}
        itemContainerStyle={{}}
        itemTextStyle={itemTextStyle}
        inputSearchStyle={inputSearchStyle}
        activeColor={activeColor}
        iconStyle={iconStyle}
        mode={mode}
        dropdownPosition={dropdownPosition}
        disable={disable}
        labelField={'label'}
        valueField={'value'}
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        maxHeight={maxHeight}
        search={search}
        data={data}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item);
          setIsFocus(false);
        }}
      />
    </ViewComp>
  );
};

export default ReactNativeElementDropdown;
