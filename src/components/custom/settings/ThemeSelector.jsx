import React from 'react';
import styled from '@emotion/native';
import ThemeUseContext from '../../../hooks/ThemeUseContext';
//* components
import TouchableOpacityComp from '../../core/TouchableOpacity';
import ViewComp from '../../core/View';
import CustomTextComp from '../CustomText';
import CustomRadioButton from '../CustomRadioButton';
import {MaterialIconsDefaultComp} from '../Icons';
//* utils
import {getThemesConstantAsArray} from '../../../utils/constant/themeConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {SIZES} from '../../../utils/constant/app/sizeConstant';

const Container = styled(ViewComp)`
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const ThemeItemButton = styled(TouchableOpacityComp)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const themesData = getThemesConstantAsArray();

const ThemeSelector = () => {
  const {theme, setTheme} = ThemeUseContext();

  return (
    <Container>
      {themesData.map((item, index) => (
        <ViewComp
          style={{display: 'flex', flexDirection: 'row', columnGap: 10}}
          key={index.toString()}>
          <CustomRadioButton
            color={COLORS.STANDARD.value}
            size={SIZES.small.value}
            active={theme === item.key}
            onPress={() => setTheme(item.key)}
          />

          <ThemeItemButton
            key={index.toString()}
            onPress={() => setTheme(item.key)}>
            <MaterialIconsDefaultComp name={item.svgName} size={20} />
            <CustomTextComp>{item.label}</CustomTextComp>
          </ThemeItemButton>
        </ViewComp>
      ))}
    </Container>
  );
};

export default ThemeSelector;
