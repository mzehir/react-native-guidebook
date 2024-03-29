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

const CheckboxPlayground = () => {
  const [selectedSize, setSelectedSize] = useState(SIZES.small.value);
  const [selectedColor, setSelectedColor] = useState(COLORS.SUCCESS.value);
  const [checked, setChecked] = useState(true);

  return (
    <Container>
      <ObserveSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        checked={checked}
        setChecked={setChecked}
      />

      <CustomizeSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      <ReadyComponentsSection sectionPaperPadding={sectionPaperPadding} />
    </Container>
  );
};

export default CheckboxPlayground;
