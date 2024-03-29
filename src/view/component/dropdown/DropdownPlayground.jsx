import React, {useState} from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../../../components/core/View';
//* sections
import ObserveSection from './ObserveSection';
import CustomizeSection from './CustomizeSection';
import ReadyComponentsSection from './ReadyComponentsSection';
//* utils
import {SIZES} from '../../../utils/constant/app/sizeConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const sectionPaperPadding = {
  paddingHorizontal: '15',
  paddingVertical: '15',
};

const RadioPlayground = () => {
  const [selectedSize, setSelectedSize] = useState(SIZES.small.value);
  const [selectedColor, setSelectedColor] = useState(COLORS.STANDARD.value);
  const [placeholderText, setPlaceholderText] = useState('Bir değer ara...');
  const [filteringPlaceholder, setFilteringPlaceholder] =
    useState('Bir değer seç...');
  const [isDisabled, setIsDisabled] = useState(false);
  const [openMenuAsADialogBox, setOpenMenuAsADialogBox] = useState(false);
  const [activateFilteringInTheMenu, setActivateFilteringInTheMenu] =
    useState(false);

  return (
    <Container>
      <ObserveSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        placeholderText={placeholderText}
        filteringPlaceholder={filteringPlaceholder}
        isDisabled={isDisabled}
        openMenuAsADialogBox={openMenuAsADialogBox}
        activateFilteringInTheMenu={activateFilteringInTheMenu}
      />

      <CustomizeSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        placeholderText={placeholderText}
        setPlaceholderText={setPlaceholderText}
        filteringPlaceholder={filteringPlaceholder}
        setFilteringPlaceholder={setFilteringPlaceholder}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        openMenuAsADialogBox={openMenuAsADialogBox}
        setOpenMenuAsADialogBox={setOpenMenuAsADialogBox}
        activateFilteringInTheMenu={activateFilteringInTheMenu}
        setActivateFilteringInTheMenu={setActivateFilteringInTheMenu}
      />

      <ReadyComponentsSection sectionPaperPadding={sectionPaperPadding} />
    </Container>
  );
};

export default RadioPlayground;
