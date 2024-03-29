import React from 'react';
import styled from '@emotion/native';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomButtonComp from '../../../components/custom/CustomButton';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
//* utils
import {SIZES} from '../../../utils/constant/app/sizeConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {BUTTON_VARIANTS} from '../../../utils/constant/app/buttonVariantConstant';
import {BUTTON_RADIUS} from '../../../utils/constant/app/buttonRadiusConstant';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {ICON_POSITION} from '../../../utils/constant/app/iconSizeConstant';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContentWrapper = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Row = styled(ViewComp)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
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
            <CustomButtonComp
              color={COLORS.ERROR.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 1
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.INFO.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 2
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.PRIMARY.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 3
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.SECONDARY.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 4
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.SUCCESS.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 5
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.WARNING.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 6
            </CustomButtonComp>
          </Row>

          <Row>
            <CustomButtonComp
              color={COLORS.ERROR.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 1
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.INFO.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.NORMAL.value}
              size={SIZES.small.value}>
              Button 2
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.PRIMARY.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.MORE.value}
              size={SIZES.small.value}>
              Button 3
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.SECONDARY.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.MUCH.value}
              size={SIZES.small.value}>
              Button 4
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.SUCCESS.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.PLENTY.value}
              size={SIZES.small.value}>
              Button 5
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.WARNING.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.MANY.value}
              size={SIZES.small.value}>
              Button 6
            </CustomButtonComp>
          </Row>

          <Row>
            <CustomButtonComp
              color={COLORS.ERROR.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 1
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.INFO.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 2
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.PRIMARY.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 3
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.SECONDARY.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 4
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.SUCCESS.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 5
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.WARNING.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 6
            </CustomButtonComp>
          </Row>

          <Row>
            <CustomButtonComp
              color={COLORS.ERROR.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 1
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.INFO.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 2
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.PRIMARY.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 3
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.SECONDARY.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 4
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.SUCCESS.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 5
            </CustomButtonComp>

            <CustomButtonComp
              color={COLORS.WARNING.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: ICON_POSITION.end.value,
              }}>
              Button 6
            </CustomButtonComp>
          </Row>
        </ContentWrapper>
      </Container>
    </CustomPaperComp>
  );
};

export default ReadyComponentsSection;
