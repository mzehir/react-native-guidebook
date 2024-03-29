import React, {useState} from 'react';
import styled from '@emotion/native';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import ReactNativeElementDropdown from '../../../components/core/reactNativeElementDropdown/ReactNativeElementDropdown';
//* utils
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {SIZES} from '../../../utils/constant/app/sizeConstant';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContentWrapper = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Row = styled(ViewComp)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;

const mockOptions = [
  {label: 'Option 1', value: 'option1'},
  {label: 'Option 2', value: 'option2'},
  {label: 'Option 3', value: 'option3'},
];

const ReadyComponentsSection = ({sectionPaperPadding}) => {
  const [selectedMock, setSelectedMock] = useState('option1');

  return (
    <CustomPaperComp {...sectionPaperPadding}>
      <Container>
        <CustomTextComp
          style={{textAlign: 'center'}}
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.readyComponents
        </CustomTextComp>

        <ContentWrapper>
          <Row>
            <ReactNativeElementDropdown
              color={COLORS.ERROR.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.INFO.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.PRIMARY.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.SECONDARY.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.STANDARD.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.SUCCESS.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.WARNING.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />
          </Row>

          <Row>
            <ReactNativeElementDropdown
              color={COLORS.ERROR.value}
              size={SIZES.medium.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.INFO.value}
              size={SIZES.medium.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.PRIMARY.value}
              size={SIZES.medium.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.SECONDARY.value}
              size={SIZES.medium.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.STANDARD.value}
              size={SIZES.medium.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.SUCCESS.value}
              size={SIZES.medium.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.WARNING.value}
              size={SIZES.medium.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />
          </Row>

          <Row>
            <ReactNativeElementDropdown
              color={COLORS.ERROR.value}
              size={SIZES.large.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.INFO.value}
              size={SIZES.large.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.PRIMARY.value}
              size={SIZES.large.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.SECONDARY.value}
              size={SIZES.large.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.STANDARD.value}
              size={SIZES.large.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.SUCCESS.value}
              size={SIZES.large.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />

            <ReactNativeElementDropdown
              color={COLORS.WARNING.value}
              size={SIZES.large.value}
              focus={true}
              search={false}
              //*
              data={mockOptions}
              value={selectedMock}
              setValue={item => {
                if (typeof item === 'object') {
                  setSelectedMock(item.value);
                }
              }}
            />
          </Row>
        </ContentWrapper>
      </Container>
    </CustomPaperComp>
  );
};

export default ReadyComponentsSection;
