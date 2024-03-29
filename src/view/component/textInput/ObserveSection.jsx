import React from 'react';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomTextInput from '../../../components/custom/CustomTextInput';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
//* utils
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {KEYBOARD_TYPES} from '../../../utils/constant/app/textInputConstants';

const ObserveSection = ({
  sectionPaperPadding,
  selectedKeyboardType,
  selectedTypeOfUse,
  isDisabled,
  iconVisible,
  selectedIconPosition,
  selectedSize,
  selectedColor,
  placeholderText,
  text,
  setText,
}) => {
  const textOnchange = text => {
    if (text === '') {
      setText('');
    }
    if (selectedKeyboardType === KEYBOARD_TYPES.numeric.value) {
      const regex = /^[0-9]+$/;

      if (regex.test(text)) {
        setText(text);
      }
    } else {
      setText(text);
    }
  };
  return (
    <CustomPaperComp {...sectionPaperPadding}>
      <ViewComp style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <CustomTextComp
          style={{textAlign: 'center'}}
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.observeComponent
        </CustomTextComp>

        <CustomTextInput
          isTranslate={false}
          keyboardType={selectedKeyboardType}
          typeOfUse={selectedTypeOfUse}
          size={selectedSize}
          color={selectedColor}
          placeholder={placeholderText}
          disabled={isDisabled}
          {...(iconVisible
            ? {
                iconFields: {
                  component: MaterialIconsDefaultComp,
                  name: 'verified',
                  position: selectedIconPosition,
                },
              }
            : {})}
          text={text}
          setText={textOnchange}
        />
      </ViewComp>
    </CustomPaperComp>
  );
};

export default ObserveSection;
