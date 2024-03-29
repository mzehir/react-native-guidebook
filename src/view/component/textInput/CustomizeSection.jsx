import React from 'react';
import styled from '@emotion/native';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import ReactNativeElementDropdown from '../../../components/core/reactNativeElementDropdown/ReactNativeElementDropdown';
import CustomTextInput from '../../../components/custom/CustomTextInput';
import CustomCheckboxComp from '../../../components/custom/CustomCheckbox';
//* utils
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {getSizesConstantAsArray} from '../../../utils/constant/app/sizeConstant';
import {getIconPositionConstantAsArray} from '../../../utils/constant/app/iconSizeConstant';
import {
  TYPES_OF_USE,
  getKeyboardTypesConstantAsArray,
  getTypesOfUseConstantAsArray,
} from '../../../utils/constant/app/textInputConstants';
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

const keyboardTypeOptions = getKeyboardTypesConstantAsArray();
const typeOfUseOptions = getTypesOfUseConstantAsArray();
const iconPositionOptions = getIconPositionConstantAsArray();
const sizeOptions = getSizesConstantAsArray();
const colorOptions = getColorsConstantAsArray();

const CustomizeSection = ({
  sectionPaperPadding,
  selectedKeyboardType,
  setSelectedKeyboardType,
  selectedTypeOfUse,
  setSelectedTypeOfUse,
  isDisabled,
  setIsDisabled,
  iconVisible,
  setIconVisible,
  selectedIconPosition,
  setSelectedIconPosition,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  placeholderText,
  setPlaceholderText,
  setText,
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
            <CustomTextComp>components.selectKeyboardType</CustomTextComp>
          </LeftColumn>

          <RightColumn>
            <ReactNativeElementDropdown
              search={false}
              data={keyboardTypeOptions}
              value={selectedKeyboardType}
              setValue={item => {
                if (typeof item === 'object') {
                  setText('');
                  setSelectedKeyboardType(item.value);
                }
              }}
            />
          </RightColumn>
        </RowContainer>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.selectUsageType</CustomTextComp>
          </LeftColumn>

          <RightColumn>
            <ReactNativeElementDropdown
              search={false}
              data={typeOfUseOptions}
              value={selectedTypeOfUse}
              setValue={item => {
                if (typeof item === 'object') {
                  setText('');
                  setSelectedTypeOfUse(item.value);
                }
              }}
            />
          </RightColumn>
        </RowContainer>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.disableComponent</CustomTextComp>
          </LeftColumn>

          <RightColumn>
            <CustomCheckboxComp
              checked={isDisabled}
              onChange={value => {
                setIsDisabled(value);
              }}
            />
          </RightColumn>
        </RowContainer>

        {selectedTypeOfUse === TYPES_OF_USE.default.value && (
          <>
            <RowContainer>
              <LeftColumn>
                <CustomTextComp>components.addIcon</CustomTextComp>
              </LeftColumn>

              <RightColumn>
                <CustomCheckboxComp
                  checked={iconVisible}
                  onChange={value => {
                    setIconVisible(value);
                  }}
                />
              </RightColumn>
            </RowContainer>

            {iconVisible && (
              <RowContainer>
                <LeftColumn>
                  <CustomTextComp>
                    components.selectLocationForIcon
                  </CustomTextComp>
                </LeftColumn>

                <RightColumn>
                  <ReactNativeElementDropdown
                    search={false}
                    data={iconPositionOptions}
                    value={selectedIconPosition}
                    setValue={item => {
                      if (typeof item === 'object') {
                        setSelectedIconPosition(item.value);
                      }
                    }}
                  />
                </RightColumn>
              </RowContainer>
            )}
          </>
        )}

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
            <CustomTextComp>components.enterPlaceholder</CustomTextComp>
          </LeftColumn>

          <RightColumn>
            <CustomTextInput
              text={placeholderText}
              setText={setPlaceholderText}
            />
          </RightColumn>
        </RowContainer>
      </ViewComp>
    </CustomPaperComp>
  );
};

export default CustomizeSection;
