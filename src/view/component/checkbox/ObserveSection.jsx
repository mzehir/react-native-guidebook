import React from 'react';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomCheckboxComp from '../../../components/custom/CustomCheckbox';
//* utils
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';

const ObserveSection = ({
  sectionPaperPadding,
  selectedSize,
  selectedColor,
  checked,
  setChecked,
}) => {
  return (
    <CustomPaperComp {...sectionPaperPadding}>
      <ViewComp style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <CustomTextComp
          style={{textAlign: 'center'}}
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.observeComponent
        </CustomTextComp>

        <CustomCheckboxComp
          size={selectedSize}
          color={selectedColor}
          checked={checked}
          onChange={value => {
            setChecked(value);
          }}
        />
      </ViewComp>
    </CustomPaperComp>
  );
};

export default ObserveSection;
