import React from 'react';
import styled from '@emotion/native';
//* components
import ScrollViewComp from '../core/ScrollView';
import ModalComp from '../core/Modal';
import ViewComp from '../core/View';
import TouchableOpacityComp from '../core/TouchableOpacity';
import CustomTextComp from './CustomText';
import {MaterialCommunityIconsDefaultComp} from './Icons';
//* utils
import {TEXT_VARIANTS} from '../../utils/constant/app/textVariantConstant';
import {SIZES} from '../../utils/constant/app/sizeConstant';
import {ICON_SIZES} from '../../utils/constant/app/iconSizeConstant';

const Container = styled(ViewComp)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled(ViewComp)`
  width: 100%;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${props =>
    props.theme.palette.app.components.modal.background};
`;

const ContentWrapper = styled(ViewComp)`
  width: 100%;
  align-items: flex-start;
`;

const Line = styled(ViewComp)`
  width: 46px;
  border: 2px solid rgba(110, 127, 152, 1);
  opacity: 0.2;
  border-radius: 3px;
`;

const TitleWrapper = styled(ViewComp)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 5px;
`;

const CloseButton = styled(TouchableOpacityComp)`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const SpacerOne = styled(ViewComp)`
  margin-bottom: ${props => props.theme.spacing.byHeight(10)};
`;

const SpacerTwo = styled(ViewComp)`
  margin-bottom: ${props => props.theme.spacing.byHeight(15)};
`;

const BottomModalComp = props => {
  const {visible, setVisible, title, children, ...other} = props;
  return (
    <ModalComp
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      {...other}>
      <Container>
        <Wrapper>
          <Line />

          <SpacerOne />

          <TitleWrapper>
            <CustomTextComp
              variant={TEXT_VARIANTS.TITLE.value}
              size={SIZES.medium.value}>
              {title ? title : ''}
            </CustomTextComp>

            <CloseButton onPress={() => setVisible(false)}>
              <MaterialCommunityIconsDefaultComp
                name="close-box"
                size={ICON_SIZES.medium.size}
              />
            </CloseButton>
          </TitleWrapper>

          <SpacerTwo />

          <ScrollViewComp style={{maxHeight: '90%', width: '100%'}}>
            <ContentWrapper>{children}</ContentWrapper>
          </ScrollViewComp>
        </Wrapper>
      </Container>
    </ModalComp>
  );
};

export default BottomModalComp;
