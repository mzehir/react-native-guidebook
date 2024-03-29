import React from 'react';
import styled from '@emotion/native';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
//* utils
import {SIZES} from '../../../utils/constant/app/sizeConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';

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
            <CustomTextComp
              color={COLORS.ERROR.value}
              variant={TEXT_VARIANTS.LABEL.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.INFO.value}
              variant={TEXT_VARIANTS.LABEL.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.PRIMARY.value}
              variant={TEXT_VARIANTS.LABEL.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.SECONDARY.value}
              variant={TEXT_VARIANTS.LABEL.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.STANDARD.value}
              variant={TEXT_VARIANTS.LABEL.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.SUCCESS.value}
              variant={TEXT_VARIANTS.LABEL.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.WARNING.value}
              variant={TEXT_VARIANTS.LABEL.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
          </Row>

          <Row>
            <CustomTextComp
              color={COLORS.ERROR.value}
              variant={TEXT_VARIANTS.BODY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.INFO.value}
              variant={TEXT_VARIANTS.BODY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.PRIMARY.value}
              variant={TEXT_VARIANTS.BODY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.SECONDARY.value}
              variant={TEXT_VARIANTS.BODY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.STANDARD.value}
              variant={TEXT_VARIANTS.BODY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.SUCCESS.value}
              variant={TEXT_VARIANTS.BODY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.WARNING.value}
              variant={TEXT_VARIANTS.BODY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
          </Row>

          <Row>
            <CustomTextComp
              color={COLORS.ERROR.value}
              variant={TEXT_VARIANTS.TITLE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.INFO.value}
              variant={TEXT_VARIANTS.TITLE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.PRIMARY.value}
              variant={TEXT_VARIANTS.TITLE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.SECONDARY.value}
              variant={TEXT_VARIANTS.TITLE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.STANDARD.value}
              variant={TEXT_VARIANTS.TITLE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.SUCCESS.value}
              variant={TEXT_VARIANTS.TITLE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>

            <CustomTextComp
              color={COLORS.WARNING.value}
              variant={TEXT_VARIANTS.TITLE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
          </Row>

          <Row>
            <CustomTextComp
              color={COLORS.ERROR.value}
              variant={TEXT_VARIANTS.HEADLINE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.INFO.value}
              variant={TEXT_VARIANTS.HEADLINE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.PRIMARY.value}
              variant={TEXT_VARIANTS.HEADLINE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.SECONDARY.value}
              variant={TEXT_VARIANTS.HEADLINE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.STANDARD.value}
              variant={TEXT_VARIANTS.HEADLINE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.SUCCESS.value}
              variant={TEXT_VARIANTS.HEADLINE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.WARNING.value}
              variant={TEXT_VARIANTS.HEADLINE.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
          </Row>

          <Row>
            <CustomTextComp
              color={COLORS.ERROR.value}
              variant={TEXT_VARIANTS.DISPLAY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.INFO.value}
              variant={TEXT_VARIANTS.DISPLAY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.PRIMARY.value}
              variant={TEXT_VARIANTS.DISPLAY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.SECONDARY.value}
              variant={TEXT_VARIANTS.DISPLAY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.STANDARD.value}
              variant={TEXT_VARIANTS.DISPLAY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.SUCCESS.value}
              variant={TEXT_VARIANTS.DISPLAY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
            <CustomTextComp
              color={COLORS.WARNING.value}
              variant={TEXT_VARIANTS.DISPLAY.value}
              size={SIZES.small.value}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </CustomTextComp>
          </Row>
        </ContentWrapper>
      </Container>
    </CustomPaperComp>
  );
};

export default ReadyComponentsSection;
