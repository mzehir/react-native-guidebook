import React from 'react';
import styled from '@emotion/native';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
import CustomTextInput from '../../../components/custom/CustomTextInput';
//* utils
import {SIZES} from '../../../utils/constant/app/sizeConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {ICON_POSITION} from '../../../utils/constant/app/iconSizeConstant';
import {
  KEYBOARD_TYPES,
  TYPES_OF_USE,
} from '../../../utils/constant/app/textInputConstants';

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
      <Container style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <CustomTextComp
          style={{textAlign: 'center'}}
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.readyComponents
        </CustomTextComp>

        <ContentWrapper>
          <Row>
            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.STANDARD.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.STANDARD.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.STANDARD.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.end.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.STANDARD.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.password.value}
              size={SIZES.small.value}
              color={COLORS.STANDARD.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.search.value}
              size={SIZES.small.value}
              color={COLORS.STANDARD.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />
          </Row>

          <Row>
            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.ERROR.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.ERROR.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.ERROR.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.end.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.ERROR.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.password.value}
              size={SIZES.small.value}
              color={COLORS.ERROR.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.search.value}
              size={SIZES.small.value}
              color={COLORS.ERROR.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />
          </Row>

          <Row>
            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.INFO.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.INFO.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.INFO.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.end.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.INFO.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.password.value}
              size={SIZES.small.value}
              color={COLORS.INFO.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.search.value}
              size={SIZES.small.value}
              color={COLORS.INFO.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />
          </Row>

          <Row>
            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.PRIMARY.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.PRIMARY.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.PRIMARY.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.end.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.PRIMARY.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.password.value}
              size={SIZES.small.value}
              color={COLORS.PRIMARY.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.search.value}
              size={SIZES.small.value}
              color={COLORS.PRIMARY.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />
          </Row>

          <Row>
            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.SECONDARY.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.SECONDARY.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.SECONDARY.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.end.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.SECONDARY.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.password.value}
              size={SIZES.small.value}
              color={COLORS.SECONDARY.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.search.value}
              size={SIZES.small.value}
              color={COLORS.SECONDARY.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />
          </Row>

          <Row>
            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.SUCCESS.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.SUCCESS.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.SUCCESS.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.end.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.SUCCESS.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.password.value}
              size={SIZES.small.value}
              color={COLORS.SUCCESS.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.search.value}
              size={SIZES.small.value}
              color={COLORS.SUCCESS.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />
          </Row>

          <Row>
            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.WARNING.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.WARNING.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.WARNING.value}
              placeholder="Random placeholder..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.end.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.default.value}
              size={SIZES.small.value}
              color={COLORS.WARNING.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'verified',
                position: ICON_POSITION.start.value,
              }}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.password.value}
              size={SIZES.small.value}
              color={COLORS.WARNING.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />

            <CustomTextInput
              keyboardType={KEYBOARD_TYPES.default.value}
              typeOfUse={TYPES_OF_USE.search.value}
              size={SIZES.small.value}
              color={COLORS.WARNING.value}
              text="Random text..."
              setText={() => {}}
              focus={true}
            />
          </Row>
        </ContentWrapper>
      </Container>
    </CustomPaperComp>
  );
};

export default ReadyComponentsSection;
