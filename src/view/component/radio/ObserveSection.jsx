import React, {useState} from 'react';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomRadioButton from '../../../components/custom/CustomRadioButton';
//* utils
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';

const ObserveSection = ({sectionPaperPadding, selectedSize, selectedColor}) => {
  const [radioSelected, setRadioSelected] = useState(false);
  return (
    <CustomPaperComp {...sectionPaperPadding}>
      <ViewComp style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <CustomTextComp
          style={{textAlign: 'center'}}
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.observeComponent
        </CustomTextComp>

        <CustomRadioButton
          color={selectedColor}
          size={selectedSize}
          active={radioSelected}
          onPress={() => {
            setRadioSelected(!radioSelected);
          }}
        />
      </ViewComp>
    </CustomPaperComp>
  );
};

export default ObserveSection;
