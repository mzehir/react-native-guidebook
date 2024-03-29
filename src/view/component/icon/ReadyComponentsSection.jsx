import React from 'react';
import styled from '@emotion/native';
//* components
import CustomPaperComp from '../../../components/custom/CustomPaper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
//* utils
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
            <MaterialIconsDefaultComp
              name="my-location"
              size={9}
              colorGroup={COLORS.ERROR.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="my-location"
              size={9}
              colorGroup={COLORS.INFO.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="my-location"
              size={9}
              colorGroup={COLORS.PRIMARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="my-location"
              size={9}
              colorGroup={COLORS.SECONDARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="my-location"
              size={9}
              colorGroup={COLORS.STANDARD.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="my-location"
              size={9}
              colorGroup={COLORS.SUCCESS.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="my-location"
              size={9}
              colorGroup={COLORS.WARNING.value}
              color="color"
            />
          </Row>

          <Row>
            <MaterialIconsDefaultComp
              name="schedule"
              size={15}
              colorGroup={COLORS.ERROR.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="schedule"
              size={15}
              colorGroup={COLORS.INFO.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="schedule"
              size={15}
              colorGroup={COLORS.PRIMARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="schedule"
              size={15}
              colorGroup={COLORS.SECONDARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="schedule"
              size={15}
              colorGroup={COLORS.STANDARD.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="schedule"
              size={15}
              colorGroup={COLORS.SUCCESS.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="schedule"
              size={15}
              colorGroup={COLORS.WARNING.value}
              color="color"
            />
          </Row>

          <Row>
            <MaterialIconsDefaultComp
              name="rocket-launch"
              size={18}
              colorGroup={COLORS.ERROR.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="rocket-launch"
              size={18}
              colorGroup={COLORS.INFO.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="rocket-launch"
              size={18}
              colorGroup={COLORS.PRIMARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="rocket-launch"
              size={18}
              colorGroup={COLORS.SECONDARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="rocket-launch"
              size={18}
              colorGroup={COLORS.STANDARD.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="rocket-launch"
              size={18}
              colorGroup={COLORS.SUCCESS.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="rocket-launch"
              size={18}
              colorGroup={COLORS.WARNING.value}
              color="color"
            />
          </Row>

          <Row>
            <MaterialIconsDefaultComp
              name="settings"
              size={21}
              colorGroup={COLORS.ERROR.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="settings"
              size={21}
              colorGroup={COLORS.INFO.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="settings"
              size={21}
              colorGroup={COLORS.PRIMARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="settings"
              size={21}
              colorGroup={COLORS.SECONDARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="settings"
              size={21}
              colorGroup={COLORS.STANDARD.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="settings"
              size={21}
              colorGroup={COLORS.SUCCESS.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="settings"
              size={21}
              colorGroup={COLORS.WARNING.value}
              color="color"
            />
          </Row>

          <Row>
            <MaterialIconsDefaultComp
              name="mark-chat-read"
              size={24}
              colorGroup={COLORS.ERROR.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="mark-chat-read"
              size={24}
              colorGroup={COLORS.INFO.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="mark-chat-read"
              size={24}
              colorGroup={COLORS.PRIMARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="mark-chat-read"
              size={24}
              colorGroup={COLORS.SECONDARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="mark-chat-read"
              size={24}
              colorGroup={COLORS.STANDARD.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="mark-chat-read"
              size={24}
              colorGroup={COLORS.SUCCESS.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="mark-chat-read"
              size={24}
              colorGroup={COLORS.WARNING.value}
              color="color"
            />
          </Row>

          <Row>
            <MaterialIconsDefaultComp
              name="verified"
              size={27}
              colorGroup={COLORS.ERROR.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="verified"
              size={27}
              colorGroup={COLORS.INFO.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="verified"
              size={27}
              colorGroup={COLORS.PRIMARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="verified"
              size={27}
              colorGroup={COLORS.SECONDARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="verified"
              size={27}
              colorGroup={COLORS.STANDARD.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="verified"
              size={27}
              colorGroup={COLORS.SUCCESS.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="verified"
              size={27}
              colorGroup={COLORS.WARNING.value}
              color="color"
            />
          </Row>

          <Row>
            <MaterialIconsDefaultComp
              name="search"
              size={35}
              colorGroup={COLORS.ERROR.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="search"
              size={35}
              colorGroup={COLORS.INFO.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="search"
              size={35}
              colorGroup={COLORS.PRIMARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="search"
              size={35}
              colorGroup={COLORS.SECONDARY.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="search"
              size={35}
              colorGroup={COLORS.STANDARD.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="search"
              size={35}
              colorGroup={COLORS.SUCCESS.value}
              color="color"
            />

            <MaterialIconsDefaultComp
              name="search"
              size={35}
              colorGroup={COLORS.WARNING.value}
              color="color"
            />
          </Row>
        </ContentWrapper>
      </Container>
    </CustomPaperComp>
  );
};

export default ReadyComponentsSection;
