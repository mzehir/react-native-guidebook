import React from 'react';
import styled from '@emotion/native';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomRadioButton from '../../../components/custom/CustomRadioButton';
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
            <CustomRadioButton
              color={COLORS.ERROR.value}
              size={SIZES.small.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.INFO.value}
              size={SIZES.small.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.PRIMARY.value}
              size={SIZES.small.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SECONDARY.value}
              size={SIZES.small.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.STANDARD.value}
              size={SIZES.small.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SUCCESS.value}
              size={SIZES.small.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.WARNING.value}
              size={SIZES.small.value}
              active={true}
              onPress={() => {}}
            />
          </Row>

          <Row>
            <CustomRadioButton
              color={COLORS.ERROR.value}
              size={SIZES.small.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.INFO.value}
              size={SIZES.small.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.PRIMARY.value}
              size={SIZES.small.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SECONDARY.value}
              size={SIZES.small.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.STANDARD.value}
              size={SIZES.small.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SUCCESS.value}
              size={SIZES.small.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.WARNING.value}
              size={SIZES.small.value}
              active={false}
              onPress={() => {}}
            />
          </Row>

          <Row>
            <CustomRadioButton
              color={COLORS.ERROR.value}
              size={SIZES.medium.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.INFO.value}
              size={SIZES.medium.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.PRIMARY.value}
              size={SIZES.medium.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SECONDARY.value}
              size={SIZES.medium.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.STANDARD.value}
              size={SIZES.medium.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SUCCESS.value}
              size={SIZES.medium.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.WARNING.value}
              size={SIZES.medium.value}
              active={true}
              onPress={() => {}}
            />
          </Row>

          <Row>
            <CustomRadioButton
              color={COLORS.ERROR.value}
              size={SIZES.medium.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.INFO.value}
              size={SIZES.medium.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.PRIMARY.value}
              size={SIZES.medium.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SECONDARY.value}
              size={SIZES.medium.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.STANDARD.value}
              size={SIZES.medium.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SUCCESS.value}
              size={SIZES.medium.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.WARNING.value}
              size={SIZES.medium.value}
              active={false}
              onPress={() => {}}
            />
          </Row>

          <Row>
            <CustomRadioButton
              color={COLORS.ERROR.value}
              size={SIZES.large.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.INFO.value}
              size={SIZES.large.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.PRIMARY.value}
              size={SIZES.large.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SECONDARY.value}
              size={SIZES.large.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.STANDARD.value}
              size={SIZES.large.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SUCCESS.value}
              size={SIZES.large.value}
              active={true}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.WARNING.value}
              size={SIZES.large.value}
              active={true}
              onPress={() => {}}
            />
          </Row>

          <Row>
            <CustomRadioButton
              color={COLORS.ERROR.value}
              size={SIZES.large.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.INFO.value}
              size={SIZES.large.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.PRIMARY.value}
              size={SIZES.large.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SECONDARY.value}
              size={SIZES.large.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.STANDARD.value}
              size={SIZES.large.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.SUCCESS.value}
              size={SIZES.large.value}
              active={false}
              onPress={() => {}}
            />

            <CustomRadioButton
              color={COLORS.WARNING.value}
              size={SIZES.large.value}
              active={false}
              onPress={() => {}}
            />
          </Row>
        </ContentWrapper>
      </Container>
    </CustomPaperComp>
  );
};

export default ReadyComponentsSection;
