import React, {useState} from 'react';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import ReactNativeElementDropdown from '../../../components/core/reactNativeElementDropdown/ReactNativeElementDropdown';
//* utils
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';

const mockOptions = [
  {label: 'Option 1', value: 'option1'},
  {label: 'Option 2', value: 'option2'},
  {label: 'Option 3', value: 'option3'},
];

const ObserveSection = ({
  sectionPaperPadding,
  selectedSize,
  selectedColor,
  placeholderText,
  filteringPlaceholder,
  isDisabled,
  openMenuAsADialogBox,
  activateFilteringInTheMenu,
}) => {
  const [selectedMock, setSelectedMock] = useState('');

  return (
    <CustomPaperComp {...sectionPaperPadding}>
      <ViewComp style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <CustomTextComp
          style={{textAlign: 'center'}}
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.observeComponent
        </CustomTextComp>

        <ReactNativeElementDropdown
          mode={openMenuAsADialogBox ? 'modal' : 'default'}
          disable={isDisabled}
          color={selectedColor}
          size={selectedSize}
          search={activateFilteringInTheMenu}
          placeholder={placeholderText}
          searchPlaceholder={filteringPlaceholder}
          //*
          data={mockOptions}
          value={selectedMock}
          setValue={item => {
            if (typeof item === 'object') {
              setSelectedMock(item.value);
            }
          }}
        />
      </ViewComp>
    </CustomPaperComp>
  );
};

export default ObserveSection;
