import React, {useState} from 'react';
import styled from '@emotion/native';
import {Linking} from 'react-native';
//* components
import ViewComp from '../../core/View';
import TouchableOpacityComp from '../../core/TouchableOpacity';
import CustomButtonComp from '../CustomButton';
import CustomTextComp from '../CustomText';
import {MaterialIconsDefaultComp} from '../Icons';
//* utils
import {ICON_SIZES} from '../../../utils/constant/app/iconSizeConstant';
import {SIZES} from '../../../utils/constant/app/sizeConstant';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {BUTTON_VARIANTS} from '../../../utils/constant/app/buttonVariantConstant';

const Container = styled(ViewComp)`
  background-color: ${props =>
    props.theme.palette.app.components.accordion.background};
  border-radius: 4px;
`;

const StyledTouchableOpacityComp = styled(TouchableOpacityComp)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: ${props =>
    props.theme.palette.app.components.accordion.borderColor};
  border-bottom-width: ${props => props.borderBottomidth + 'px'};
  padding-horizontal: 16px;
  padding-vertical: 12px;
`;

const ContentWrapper = styled(ViewComp)`
  gap: 10px;
  border-color: ${props =>
    props.theme.palette.app.components.accordion.borderColor};
  border-bottom-width: ${props => props.borderBottomidth + 'px'};
  padding-horizontal: 20px;
  padding-bottom: 10px;
`;

const AccordionItem = ({isLastItem, item, expanded, onPress}) => {
  return (
    <>
      <StyledTouchableOpacityComp
        borderBottomidth={isLastItem || expanded ? '0' : '1'}
        onPress={onPress}>
        <CustomTextComp
          variant={TEXT_VARIANTS.LABEL.value}
          size={SIZES.large.value}
          color={COLORS.PRIMARY.value}>
          {item.title}
        </CustomTextComp>

        <MaterialIconsDefaultComp
          name={expanded ? 'expand-less' : 'expand-more'}
          size={ICON_SIZES.medium.size}
          colorGroup={COLORS.PRIMARY.value}
          color="color"
        />
      </StyledTouchableOpacityComp>

      {expanded && (
        <ContentWrapper borderBottomidth={isLastItem || expanded ? '1' : '0'}>
          {item.descriptionTitle && (
            <CustomTextComp
              variant={TEXT_VARIANTS.LABEL.value}
              size={SIZES.medium.value}
              color={COLORS.WARNING.value}>
              {item.descriptionTitle}
            </CustomTextComp>
          )}

          <CustomTextComp
            variant={TEXT_VARIANTS.LABEL.value}
            size={SIZES.small.value}>
            {item.description}
          </CustomTextComp>

          {item.link && (
            <ViewComp
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <CustomButtonComp
                variant={BUTTON_VARIANTS.TEXT.value}
                color={COLORS.SUCCESS.value}
                fullWidth={false}
                onPress={() => Linking.openURL(item.link)}>
                {item.linkText}
              </CustomButtonComp>
            </ViewComp>
          )}
        </ContentWrapper>
      )}
    </>
  );
};

const AccordionComp = ({data}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handlePress = index => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <Container>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          isLastItem={index + 1 == data.length}
          item={item}
          expanded={index === expandedIndex}
          onPress={() => handlePress(index)}
        />
      ))}
    </Container>
  );
};

export default AccordionComp;
