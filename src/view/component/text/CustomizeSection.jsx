import React from 'react';
import styled from '@emotion/native';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import ReactNativeElementDropdown from '../../../components/core/reactNativeElementDropdown/ReactNativeElementDropdown';
//* utils
import {getSizesConstantAsArray} from '../../../utils/constant/app/sizeConstant';
import {
  TEXT_VARIANTS,
  getTextVariantsConstantAsArray,
} from '../../../utils/constant/app/textVariantConstant';
import {
  COLORS,
  getColorsConstantAsArray,
} from '../../../utils/constant/app/colorConstant';

const RowContainer = styled(ViewComp)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const LeftColumn = styled(ViewComp)`
  width: 50%;
`;

const RightColumn = styled(ViewComp)`
  width: 50%;
`;

const sizeOptions = getSizesConstantAsArray();

const colorOptions = getColorsConstantAsArray();

const variantOptions = getTextVariantsConstantAsArray();

const CustomizeSection = ({
  sectionPaperPadding,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  selectedVariant,
  setSelectedVariant,
}) => {
  return (
    <CustomPaperComp {...sectionPaperPadding}>
      <ViewComp style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <CustomTextComp
          style={{textAlign: 'center'}}
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.customizeComponent
        </CustomTextComp>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.selectSize</CustomTextComp>
          </LeftColumn>

          <RightColumn>
            <ReactNativeElementDropdown
              search={false}
              data={sizeOptions}
              value={selectedSize}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedSize(item.value);
                }
              }}
            />
          </RightColumn>
        </RowContainer>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.selectColor</CustomTextComp>
          </LeftColumn>

          <RightColumn>
            <ReactNativeElementDropdown
              search={false}
              data={colorOptions}
              value={selectedColor}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedColor(item.value);
                }
              }}
            />
          </RightColumn>
        </RowContainer>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.selectVariant</CustomTextComp>
          </LeftColumn>

          <RightColumn>
            <ReactNativeElementDropdown
              search={false}
              data={variantOptions}
              value={selectedVariant}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedVariant(item.value);
                }
              }}
            />
          </RightColumn>
        </RowContainer>
      </ViewComp>
    </CustomPaperComp>
  );
};

export default CustomizeSection;
