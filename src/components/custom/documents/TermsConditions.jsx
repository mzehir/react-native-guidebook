import React from 'react';
import styled from '@emotion/native';
import {Linking} from 'react-native';
//* components
import ViewComp from '../../core/View';
import CustomTextComp from '../CustomText';
import CustomButtonComp from '../CustomButton';
import CustomDividerComp from '../CustomDivider';
//* utils
import {BUTTON_VARIANTS} from '../../../utils/constant/app/buttonVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';

const Container = styled(ViewComp)``;

const SectionTitleText = styled(CustomTextComp)`
  font-weight: 500;
`;

const ListWrapper = styled(ViewComp)`
  padding-horizontal: 15px;
`;

const SectionSpacer = styled(ViewComp)`
  margin-bottom: 25px;
`;

const RowSpacer = styled(ViewComp)`
  margin-bottom: 15px;
`;

const TermsConditions = () => {
  return (
    <Container>
      <TermsConditionsSection />

      <SectionSpacer />

      <ChangesToTheseTermsAndConditionsSection />

      <SectionSpacer />

      <ContactUsSection />

      <SectionSpacer />

      <CustomDividerComp />

      <SectionSpacer />

      <AppPrivacyPolicyGeneratorSection />

      <SectionSpacer />
    </Container>
  );
};

export default TermsConditions;

const TermsConditionsSection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Terms & Conditions</SectionTitleText>
      <CustomTextComp>
        These terms and conditions applies to the React Native Guidebook app
        (hereby referred to as "Application") for mobile devices that was
        created by Mümin (hereby referred to as "Service Provider") as a Free
        service.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        Upon downloading or utilizing the Application, you are automatically
        agreeing to the following terms. It is strongly advised that you
        thoroughly read and understand these terms prior to using the
        Application. Unauthorized copying, modification of the Application, any
        part of the Application, or our trademarks is strictly prohibited. Any
        attempts to extract the source code of the Application, translate the
        Application into other languages, or create derivative versions are not
        permitted. All trademarks, copyrights, database rights, and other
        intellectual property rights related to the Application remain the
        property of the Service Provider.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        The Service Provider is dedicated to ensuring that the Application is as
        beneficial and efficient as possible. As such, they reserve the right to
        modify the Application or charge for their services at any time and for
        any reason. The Service Provider assures you that any charges for the
        Application or its services will be clearly communicated to you.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        The Application stores and processes personal data that you have
        provided to the Service Provider in order to provide the Service. It is
        your responsibility to maintain the security of your phone and access to
        the Application. The Service Provider strongly advise against
        jailbreaking or rooting your phone, which involves removing software
        restrictions and limitations imposed by the official operating system of
        your device. Such actions could expose your phone to malware, viruses,
        malicious programs, compromise your phone's security features, and may
        result in the Application not functioning correctly or at all.
      </CustomTextComp>
      <CustomTextComp>
        Please note that the Application utilizes third-party services that have
        their own Terms and Conditions. Below are the links to the Terms and
        Conditions of the third-party service providers used by the Application:
      </CustomTextComp>

      <RowSpacer />

      <ListWrapper>
        <CustomButtonComp
          variant={BUTTON_VARIANTS.TEXT.value}
          color={COLORS.PRIMARY.value}
          isTranslate={false}
          fullWidth={false}
          onPress={() => Linking.openURL('https://policies.google.com/terms')}>
          Google Play Services
        </CustomButtonComp>
      </ListWrapper>

      <RowSpacer />

      <CustomTextComp>
        Please be aware that the Service Provider does not assume responsibility
        for certain aspects. Some functions of the Application require an active
        internet connection, which can be Wi-Fi or provided by your mobile
        network provider. The Service Provider cannot be held responsible if the
        Application does not function at full capacity due to lack of access to
        Wi-Fi or if you have exhausted your data allowance.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        If you are using the application outside of a Wi-Fi area, please be
        aware that your mobile network provider's agreement terms still apply.
        Consequently, you may incur charges from your mobile provider for data
        usage during the connection to the application, or other third-party
        charges. By using the application, you accept responsibility for any
        such charges, including roaming data charges if you use the application
        outside of your home territory (i.e., region or country) without
        disabling data roaming. If you are not the bill payer for the device on
        which you are using the application, they assume that you have obtained
        permission from the bill payer.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        Similarly, the Service Provider cannot always assume responsibility for
        your usage of the application. For instance, it is your responsibility
        to ensure that your device remains charged. If your device runs out of
        battery and you are unable to access the Service, the Service Provider
        cannot be held responsible.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        In terms of the Service Provider's responsibility for your use of the
        application, it is important to note that while they strive to ensure
        that it is updated and accurate at all times, they do rely on third
        parties to provide information to them so that they can make it
        available to you. The Service Provider accepts no liability for any
        loss, direct or indirect, that you experience as a result of relying
        entirely on this functionality of the application.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        The Service Provider may wish to update the application at some point.
        The application is currently available as per the requirements for the
        operating system (and for any additional systems they decide to extend
        the availability of the application to) may change, and you will need to
        download the updates if you want to continue using the application. The
        Service Provider does not guarantee that it will always update the
        application so that it is relevant to you and/or compatible with the
        particular operating system version installed on your device. However,
        you agree to always accept updates to the application when offered to
        you. The Service Provider may also wish to cease providing the
        application and may terminate its use at any time without providing
        termination notice to you. Unless they inform you otherwise, upon any
        termination, (a) the rights and licenses granted to you in these terms
        will end; (b) you must cease using the application, and (if necessary)
        delete it from your device.
      </CustomTextComp>
    </ViewComp>
  );
};

const ChangesToTheseTermsAndConditionsSection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Changes to These Terms and Conditions</SectionTitleText>
      <CustomTextComp>
        The Service Provider may periodically update their Terms and Conditions.
        Therefore, you are advised to review this page regularly for any
        changes. The Service Provider will notify you of any changes by posting
        the new Terms and Conditions on this page.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        These terms and conditions are effective as of 2024-03-20
      </CustomTextComp>
    </ViewComp>
  );
};

const ContactUsSection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Contact Us</SectionTitleText>
      <CustomTextComp>
        If you have any questions or suggestions about the Terms and Conditions,
        please do not hesitate to contact the Service Provider at
        zehir.m.54@gmail.com.
      </CustomTextComp>
    </ViewComp>
  );
};

const AppPrivacyPolicyGeneratorSection = () => {
  return (
    <CustomTextComp isTranslate={false}>
      This Terms and Conditions page was generated by{' '}
      <CustomButtonComp
        variant={BUTTON_VARIANTS.TEXT.value}
        color={COLORS.PRIMARY.value}
        isTranslate={false}
        fullWidth={false}
        onPress={() =>
          Linking.openURL('https://app-privacy-policy-generator.nisrulz.com/')
        }>
        App Privacy Policy Generator
      </CustomButtonComp>
    </CustomTextComp>
  );
};
