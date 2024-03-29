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

const PrivacyPolicy = () => {
  return (
    <Container>
      <PrivacyPolicySection />

      <SectionSpacer />

      <InformationCollectionAndUseSection />

      <SectionSpacer />

      <ThirdPartyAccessSection />

      <SectionSpacer />

      <OptOutRightsSection />

      <SectionSpacer />

      <DataRetentionPolicySection />

      <SectionSpacer />

      <ChildrenSection />

      <SectionSpacer />

      <SecuritySection />

      <SectionSpacer />

      <ChangesSection />

      <SectionSpacer />

      <YourConsentSection />

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

export default PrivacyPolicy;

const PrivacyPolicySection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Privacy Policy</SectionTitleText>

      <CustomTextComp>
        This privacy policy applies to the React Native Guidebook app (hereby
        referred to as "Application") for mobile devices that was created by
        Mümin (hereby referred to as "Service Provider") as a Free service. This
        service is intended for use "AS IS".
      </CustomTextComp>
    </ViewComp>
  );
};

const InformationCollectionAndUseSection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Information Collection and Use</SectionTitleText>
      <CustomTextComp>
        The Application collects information when you download and use it. This
        information may include information such as
      </CustomTextComp>

      <RowSpacer />

      <ListWrapper>
        <CustomTextComp>
          - Your device's Internet Protocol address (e.g. IP address)
        </CustomTextComp>
        <CustomTextComp>
          - The pages of the Application that you visit, the time and date of
          your visit, the time spent on those pages
        </CustomTextComp>
        <CustomTextComp>- The time spent on the Application</CustomTextComp>
        <CustomTextComp>
          - The operating system you use on your mobile device
        </CustomTextComp>
      </ListWrapper>

      <RowSpacer />

      <CustomTextComp>
        The Application does not gather precise information about the location
        of your mobile device.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        The Service Provider may use the information you provided to contact you
        from time to time to provide you with important information, required
        notices and marketing promotions.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        For a better experience, while using the Application, the Service
        Provider may require you to provide us with certain personally
        identifiable information. The information that the Service Provider
        request will be retained by them and used as described in this privacy
        policy.
      </CustomTextComp>
    </ViewComp>
  );
};

const ThirdPartyAccessSection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Third Party Access</SectionTitleText>
      <CustomTextComp>
        Only aggregated, anonymized data is periodically transmitted to external
        services to aid the Service Provider in improving the Application and
        their service. The Service Provider may share your information with
        third parties in the ways that are described in this privacy statement.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        Please note that the Application utilizes third-party services that have
        their own Privacy Policy about handling data. Below are the links to the
        Privacy Policy of the third-party service providers used by the
        Application:
      </CustomTextComp>

      <RowSpacer />

      <ListWrapper>
        <CustomButtonComp
          variant={BUTTON_VARIANTS.TEXT.value}
          color={COLORS.PRIMARY.value}
          isTranslate={false}
          fullWidth={false}
          onPress={() =>
            Linking.openURL('https://www.google.com/policies/privacy/')
          }>
          Google Play Services
        </CustomButtonComp>
      </ListWrapper>

      <RowSpacer />

      <CustomTextComp>
        The Service Provider may disclose User Provided and Automatically
        Collected Information:
      </CustomTextComp>

      <RowSpacer />

      <ListWrapper>
        <CustomTextComp>
          - as required by law, such as to comply with a subpoena, or similar
          legal process;
        </CustomTextComp>
        <CustomTextComp>
          - when they believe in good faith that disclosure is necessary to
          protect their rights, protect your safety or the safety of others,
          investigate fraud, or respond to a government request;
        </CustomTextComp>
        <CustomTextComp>
          - with their trusted services providers who work on their behalf, do not
          have an independent use of the information we disclose to them, and
          have agreed to adhere to the rules set forth in this privacy
          statement.
        </CustomTextComp>
      </ListWrapper>
    </ViewComp>
  );
};

const OptOutRightsSection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Opt-Out Rights</SectionTitleText>
      <CustomTextComp>
        You can stop all collection of information by the Application easily by
        uninstalling it. You may use the standard uninstall processes as may be
        available as part of your mobile device or via the mobile application
        marketplace or network.
      </CustomTextComp>
    </ViewComp>
  );
};

const DataRetentionPolicySection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Data Retention Policy</SectionTitleText>
      <CustomTextComp>
        The Service Provider will retain User Provided data for as long as you
        use the Application and for a reasonable time thereafter. If you'd like
        them to delete User Provided Data that you have provided via the
        Application, please contact them at zehir.m.54@gmail.com and they will
        respond in a reasonable time.
      </CustomTextComp>
    </ViewComp>
  );
};

const ChildrenSection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Children</SectionTitleText>
      <CustomTextComp>
        The Service Provider does not use the Application to knowingly solicit
        data from or market to children under the age of 13.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        The Application does not address anyone under the age of 13. The Service
        Provider does not knowingly collect personally identifiable information
        from children under 13 years of age. In the case the Service Provider
        discover that a child under 13 has provided personal information, the
        Service Provider will immediately delete this from their servers. If you
        are a parent or guardian and you are aware that your child has provided
        us with personal information, please contact the Service Provider
        (zehir.m.54@gmail.com) so that they will be able to take the necessary
        actions.
      </CustomTextComp>
    </ViewComp>
  );
};

const SecuritySection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Security</SectionTitleText>
      <CustomTextComp>
        The Service Provider is concerned about safeguarding the confidentiality
        of your information. The Service Provider provides physical, electronic,
        and procedural safeguards to protect information the Service Provider
        processes and maintains.
      </CustomTextComp>
    </ViewComp>
  );
};

const ChangesSection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Changes</SectionTitleText>
      <CustomTextComp>
        This Privacy Policy may be updated from time to time for any reason. The
        Service Provider will notify you of any changes to the Privacy Policy by
        updating this page with the new Privacy Policy. You are advised to
        consult this Privacy Policy regularly for any changes, as continued use
        is deemed approval of all changes.
      </CustomTextComp>

      <RowSpacer />

      <CustomTextComp>
        This privacy policy is effective as of 2024-03-20
      </CustomTextComp>
    </ViewComp>
  );
};

const YourConsentSection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Your Consent</SectionTitleText>
      <CustomTextComp>
        By using the Application, you are consenting to the processing of your
        information as set forth in this Privacy Policy now and as amended by
        us.
      </CustomTextComp>
    </ViewComp>
  );
};

const ContactUsSection = () => {
  return (
    <ViewComp>
      <SectionTitleText>Contact Us</SectionTitleText>
      <CustomTextComp>
        If you have any questions regarding privacy while using the Application,
        or have questions about the practices, please contact the Service
        Provider via email at zehir.m.54@gmail.com.
      </CustomTextComp>
    </ViewComp>
  );
};

const AppPrivacyPolicyGeneratorSection = () => {
  return (
    <CustomTextComp isTranslate={false}>
      This privacy policy page was generated by{' '}
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
