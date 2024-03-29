import React from 'react';
import {Linking} from 'react-native';
//* components
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomButtonComp from '../../../components/custom/CustomButton';
//* utils
import {BUTTON_VARIANTS} from '../../../utils/constant/app/buttonVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {SIZES} from '../../../utils/constant/app/sizeConstant';

const ContactView = () => {
  return (
    <ViewComp
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <CustomTextComp
        variant={TEXT_VARIANTS.TITLE.value}
        size={SIZES.medium.value}
        style={{marginBottom: 20, fontWeight: 'bold'}}>
        components.pageIsNotReadyYet
      </CustomTextComp>

      <CustomTextComp
        variant={TEXT_VARIANTS.LABEL.value}
        size={SIZES.large.value}
        style={{marginBottom: 20}}>
        components.contactContent
      </CustomTextComp>

      <CustomButtonComp
        variant={BUTTON_VARIANTS.TEXT.value}
        color={COLORS.PRIMARY.value}
        fullWidth={false}
        onPress={() => Linking.openURL('https://m-zehir.com.tr/contact')}>
        m-zehir.com.tr/contact
      </CustomButtonComp>
    </ViewComp>
  );
};

export default ContactView;
