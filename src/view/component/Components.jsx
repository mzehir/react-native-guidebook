import React from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../../components/core/View';
import CustomPaperComp from '../../components/custom/CustomPaper';
import CustomButtonComp from '../../components/custom/CustomButton';
import CustomTextComp from '../../components/custom/CustomText';
import {
  MaterialCommunityIconsDefaultComp,
  MaterialIconsDefaultComp,
} from '../../components/custom/Icons';
//* utils
import {COMPONENT_NAVIGATORS} from '../../utils/constant/navigatorComponentConstant';
import {BUTTON_VARIANTS} from '../../utils/constant/app/buttonVariantConstant';
import {COLORS} from '../../utils/constant/app/colorConstant';
import {SIZES} from '../../utils/constant/app/sizeConstant';
import {TEXT_VARIANTS} from '../../utils/constant/app/textVariantConstant';
import {
  ICON_POSITION,
  ICON_SIZES,
} from '../../utils/constant/app/iconSizeConstant';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
`;

const ItemContainer = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-vertical: 15px;
  padding-horizontal: 15px;
  min-height: 170px;
`;

const ItemContent = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ItemButtonContainer = styled(ViewComp)`
  flex-direction: row;
  justify-content: flex-end;
`;

const ShadowContainer = styled(ViewComp)`
  padding: 5px;
  background-color: ${props => props.theme.palette.standard.background};
  border-radius: 20px;
  shadow-color: ${props => props.theme.palette.warning.background};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5; // Android için gölge efekti
`;

const ShadowBox = styled(ViewComp)`
  padding: 5px;
  background-color: ${props => props.theme.bottomTab.background};
  border-radius: 20px;
  shadow-color: ${props => props.theme.palette.success.background};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5; // Android için gölge efekti
`;

const ComponentsView = ({navigation}) => {
  const items = [
    {
      title: 'Icon',
      content: 'components.componentsViewIconDesc',
      name: COMPONENT_NAVIGATORS.ICON.name,
      iconComp: MaterialCommunityIconsDefaultComp,
      iconName: 'svg',
    },
    {
      title: 'Checkbox',
      content: 'components.componentsViewCheckboxDesc',
      name: COMPONENT_NAVIGATORS.CHECKBOX.name,
      iconComp: MaterialIconsDefaultComp,
      iconName: 'check-box',
    },
    {
      title: 'Radio-Button',
      content: 'components.componentsViewRadioButtonDesc',
      name: COMPONENT_NAVIGATORS.RADIO_BUTTON.name,
      iconComp: MaterialIconsDefaultComp,
      iconName: 'radio-button-checked',
    },
    {
      title: 'Typography',
      content: 'components.componentsViewTypographyDesc',
      name: COMPONENT_NAVIGATORS.TEXT.name,
      iconComp: MaterialCommunityIconsDefaultComp,
      iconName: 'format-color-text',
    },
    {
      title: 'Text-Input',
      content: 'components.componentsViewTextInputDesc',
      name: COMPONENT_NAVIGATORS.TEXT_INPUT.name,
      iconComp: MaterialIconsDefaultComp,
      iconName: 'text-fields',
    },
    {
      title: 'Dropdown',
      content: 'components.componentsViewDropdownDesc',
      name: COMPONENT_NAVIGATORS.DROPDOWN.name,
      iconComp: MaterialCommunityIconsDefaultComp,
      iconName: 'lead-pencil',
    },
    {
      title: 'Button',
      content: 'components.componentsViewButtonDesc',
      name: COMPONENT_NAVIGATORS.BUTTON.name,
      iconComp: MaterialCommunityIconsDefaultComp,
      iconName: 'cursor-pointer',
    },
  ];
  return (
    <Container>
      {items.map((item, index) => (
        <ViewComp
          key={index.toString()}
          style={{
            width: '48%',
          }}>
          <CustomPaperComp>
            <Item
              navigation={navigation}
              title={item.title}
              content={item.content}
              name={item.name}
              IconComp={item.iconComp}
              iconName={item.iconName}
            />
          </CustomPaperComp>
        </ViewComp>
      ))}
    </Container>
  );
};

export default ComponentsView;

const Item = ({navigation, title, content, name, IconComp, iconName}) => {
  return (
    <ItemContainer>
      <ItemContent>
        <ViewComp
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <CustomTextComp
            isTranslate={false}
            variant={TEXT_VARIANTS.TITLE.value}
            size={SIZES.medium.value}>
            {title}
          </CustomTextComp>

          <ShadowContainer>
            <ShadowBox>
              <IconComp name={iconName} size={ICON_SIZES.small.size} />
            </ShadowBox>
          </ShadowContainer>
        </ViewComp>

        <CustomTextComp
          variant={TEXT_VARIANTS.LABEL.value}
          size={SIZES.small.value}>
          {content}
        </CustomTextComp>
      </ItemContent>

      <ItemButtonContainer>
        <CustomButtonComp
          variant={BUTTON_VARIANTS.TEXT.value}
          color={COLORS.INFO.value}
          size={SIZES.small.value}
          iconFields={{
            component: MaterialIconsDefaultComp,
            name: 'arrow-forward',
            position: ICON_POSITION.end.value,
          }}
          onPress={() => navigation.navigate(name)}>
          components.goToDetail
        </CustomButtonComp>
      </ItemButtonContainer>
    </ItemContainer>
  );
};
