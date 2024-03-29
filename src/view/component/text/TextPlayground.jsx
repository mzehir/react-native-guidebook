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
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const sectionPaperPadding = {
  paddingHorizontal: '15',
  paddingVertical: '15',
};

const TextPlayground = () => {
  const [selectedSize, setSelectedSize] = useState(SIZES.large.value);
  const [selectedColor, setSelectedColor] = useState(COLORS.SUCCESS.value);
  const [selectedVariant, setSelectedVariant] = useState(
    TEXT_VARIANTS.TITLE.value,
  );
  return (
    <Container>
      <ObserveSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        selectedVariant={selectedVariant}
      />

      <CustomizeSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
      />

      <ReadyComponentsSection sectionPaperPadding={sectionPaperPadding} />
    </Container>
  );
};

export default TextPlayground;
