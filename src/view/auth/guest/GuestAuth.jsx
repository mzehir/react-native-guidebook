import React, {useEffect, useState} from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
//* components
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
//* utils
import {AUTH_NAVIGATORS} from '../../../utils/constant/navigatorAuthConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const GuestAuthView = () => {
  const navigation = useNavigation();
  const [displayText, setDisplayText] = useState('');
  const message = 'REACT NATIVE GUIDEBOOK';

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < message.length) {
        setDisplayText(currentText => currentText + message[index]);
        index++;
      } else {
        navigation.navigate(AUTH_NAVIGATORS.HOME_NAVIGATOR.name);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <CustomTextComp
        isTranslate={false}
        style={{textAlign: 'center'}}
        color={COLORS.WARNING.value}
        variant={TEXT_VARIANTS.TITLE.value}>
        {displayText}
      </CustomTextComp>
    </Container>
  );
};

export default GuestAuthView;
