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
import {BUTTON_RADIUS} from '../../../utils/constant/app/buttonRadiusConstant';
import {BUTTON_VARIANTS} from '../../../utils/constant/app/buttonVariantConstant';
import {ICON_POSITION} from '../../../utils/constant/app/iconSizeConstant';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const sectionPaperPadding = {
  paddingHorizontal: '15',
  paddingVertical: '15',
};

const ButtonPlayground = () => {
  const [selectedSize, setSelectedSize] = useState(SIZES.small.value);
  const [selectedColor, setSelectedColor] = useState(COLORS.SUCCESS.value);
  const [selectedVariant, setSelectedVariant] = useState(
    BUTTON_VARIANTS.CONTAINED.value,
  );
  const [selectedRadius, setSelectedRadius] = useState(BUTTON_RADIUS.FEW.value);
  const [selectedIconPosition, setSelectedIconPosition] = useState(
    ICON_POSITION.start.value,
  );
  const [iconVisible, setIconVisible] = useState(true);
  return (
    <Container>
      <ObserveSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        selectedVariant={selectedVariant}
        selectedRadius={selectedRadius}
        selectedIconPosition={selectedIconPosition}
        iconVisible={iconVisible}
      />

      <CustomizeSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
        selectedRadius={selectedRadius}
        setSelectedRadius={setSelectedRadius}
        selectedIconPosition={selectedIconPosition}
        setSelectedIconPosition={setSelectedIconPosition}
        iconVisible={iconVisible}
        setIconVisible={setIconVisible}
      />

      <ReadyComponentsSection sectionPaperPadding={sectionPaperPadding} />
    </Container>
  );
};

export default ButtonPlayground;
