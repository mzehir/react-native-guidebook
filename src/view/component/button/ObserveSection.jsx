import React from 'react';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomButtonComp from '../../../components/custom/CustomButton';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
//* utils
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';

const ObserveSection = ({
  sectionPaperPadding,
  selectedSize,
  selectedColor,
  selectedVariant,
  selectedRadius,
  selectedIconPosition,
  iconVisible,
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

        <CustomButtonComp
          size={selectedSize}
          color={selectedColor}
          variant={selectedVariant}
          radius={selectedRadius}
          {...(iconVisible
            ? {
                iconFields: {
                  component: MaterialIconsDefaultComp,
                  name: 'arrow-forward',
                  position: selectedIconPosition,
                },
              }
            : {})}>
          Custom Button
        </CustomButtonComp>
      </ViewComp>
    </CustomPaperComp>
  );
};

export default ObserveSection;
