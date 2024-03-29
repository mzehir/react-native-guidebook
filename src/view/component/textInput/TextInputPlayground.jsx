import React, {useState} from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../../../components/core/View';
//* sections
import ObserveSection from './ObserveSection';
import CustomizeSection from './CustomizeSection';
import ReadyComponentsSection from './ReadyComponentsSection';
//* utils
import {ICON_POSITION} from '../../../utils/constant/app/iconSizeConstant';
import {SIZES} from '../../../utils/constant/app/sizeConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {
  KEYBOARD_TYPES,
  TYPES_OF_USE,
} from '../../../utils/constant/app/textInputConstants';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const sectionPaperPadding = {
  paddingHorizontal: '15',
  paddingVertical: '15',
};

const TextInputPlayground = () => {
  const [selectedKeyboardType, setSelectedKeyboardType] = useState(
    KEYBOARD_TYPES.default.value,
  );
  const [selectedTypeOfUse, setSelectedTypeOfUse] = useState(
    TYPES_OF_USE.default.value,
  );
  const [isDisabled, setIsDisabled] = useState(false);
  const [iconVisible, setIconVisible] = useState(false);
  const [selectedIconPosition, setSelectedIconPosition] = useState(
    ICON_POSITION.start.value,
  );
  const [selectedSize, setSelectedSize] = useState(SIZES.small.value);
  const [selectedColor, setSelectedColor] = useState(COLORS.STANDARD.value);
  const [placeholderText, setPlaceholderText] = useState('Placeholder...');
  const [text, setText] = useState('');
  return (
    <Container>
      <ObserveSection
        sectionPaperPadding={sectionPaperPadding}
        selectedKeyboardType={selectedKeyboardType}
        selectedTypeOfUse={selectedTypeOfUse}
        isDisabled={isDisabled}
        iconVisible={iconVisible}
        selectedIconPosition={selectedIconPosition}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        placeholderText={placeholderText}
        text={text}
        setText={setText}
      />

      <CustomizeSection
        sectionPaperPadding={sectionPaperPadding}
        selectedKeyboardType={selectedKeyboardType}
        setSelectedKeyboardType={setSelectedKeyboardType}
        selectedTypeOfUse={selectedTypeOfUse}
        setSelectedTypeOfUse={setSelectedTypeOfUse}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        iconVisible={iconVisible}
        setIconVisible={setIconVisible}
        selectedIconPosition={selectedIconPosition}
        setSelectedIconPosition={setSelectedIconPosition}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        placeholderText={placeholderText}
        setPlaceholderText={setPlaceholderText}
        setText={setText}
      />

      <ReadyComponentsSection sectionPaperPadding={sectionPaperPadding} />
    </Container>
  );
};

export default TextInputPlayground;
