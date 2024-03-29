import React from 'react';
import styled from '@emotion/native';
import LanguageUseContext from '../../../hooks/LanguageUseContext';
//* components
import ViewComp from '../../core/View';
import TouchableOpacityComp from '../../core/TouchableOpacity';
import CustomTextComp from '../CustomText';
import CustomRadioButton from '../CustomRadioButton';
//* utils
import {getLanguagesConstantAsArray} from '../../../utils/constant/languageConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {SIZES} from '../../../utils/constant/app/sizeConstant';

const Container = styled(ViewComp)`
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const LanguageItemButton = styled(TouchableOpacityComp)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const languagesData = getLanguagesConstantAsArray();

const LanguageSelector = () => {
  const {language, setLanguage, translate} = LanguageUseContext();

  return (
    <Container>
      {languagesData.map((item, index) => (
        <ViewComp
          style={{display: 'flex', flexDirection: 'row', columnGap: 10}}
          key={index.toString()}>
          <CustomRadioButton
            color={COLORS.STANDARD.value}
            size={SIZES.small.value}
            active={language === item.key}
            onPress={() => setLanguage(item.key)}
          />

          <LanguageItemButton
            key={index.toString()}
            onPress={() => setLanguage(item.key)}>
            <CustomTextComp>{translate(item.label)}</CustomTextComp>
          </LanguageItemButton>
        </ViewComp>
      ))}
    </Container>
  );
};

export default LanguageSelector;
