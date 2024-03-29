import React, {useState} from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../../../components/core/View';
//* sections
import ObserveSection from './ObserveSection';
import ReadyComponentsSection from './ReadyComponentsSection';
import CustomizeSection from './CustomizeSection';
//* utils
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

const TextPlayground = () => {
  const [selectedSize, setSelectedSize] = useState('25');
  const [selectedColor, setSelectedColor] = useState(COLORS.SUCCESS.value);

  return (
    <Container>
      <ObserveSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
      />

      <CustomizeSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        setSelectedSize={text => {
          const regex = /^[0-9]+$/;

          if (regex.test(text)) {
            setSelectedSize(text);
          }
        }}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <ReadyComponentsSection sectionPaperPadding={sectionPaperPadding} />
    </Container>
  );
};

export default TextPlayground;
