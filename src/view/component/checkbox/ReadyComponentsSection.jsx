import React from 'react';
import styled from '@emotion/native';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomCheckboxComp from '../../../components/custom/CustomCheckbox';
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
  gap: 5px;
`;

const ReadyComponentsSection = ({sectionPaperPadding}) => {
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
            <CustomCheckboxComp
              size={SIZES.large.value}
              color={COLORS.ERROR.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.large.value}
              color={COLORS.INFO.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.large.value}
              color={COLORS.PRIMARY.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.large.value}
              color={COLORS.SECONDARY.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.large.value}
              color={COLORS.STANDARD.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.large.value}
              color={COLORS.SUCCESS.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.large.value}
              color={COLORS.WARNING.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />
          </Row>

          <Row>
            <CustomCheckboxComp
              size={SIZES.medium.value}
              color={COLORS.ERROR.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.medium.value}
              color={COLORS.INFO.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.medium.value}
              color={COLORS.PRIMARY.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.medium.value}
              color={COLORS.SECONDARY.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.medium.value}
              color={COLORS.STANDARD.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.medium.value}
              color={COLORS.SUCCESS.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.medium.value}
              color={COLORS.WARNING.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />
          </Row>

          <Row>
            <CustomCheckboxComp
              size={SIZES.small.value}
              color={COLORS.ERROR.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.small.value}
              color={COLORS.INFO.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.small.value}
              color={COLORS.PRIMARY.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.small.value}
              color={COLORS.SECONDARY.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.small.value}
              color={COLORS.STANDARD.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.small.value}
              color={COLORS.SUCCESS.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />

            <CustomCheckboxComp
              size={SIZES.small.value}
              color={COLORS.WARNING.value}
              checked={true}
              onChange={value => {
                console.log(value);
              }}
            />
          </Row>
        </ContentWrapper>
      </Container>
    </CustomPaperComp>
  );
};

export default ReadyComponentsSection;
