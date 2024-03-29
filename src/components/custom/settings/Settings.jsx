import React, {useState} from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../../core/View';
import TouchableOpacityComp from '../../core/TouchableOpacity';
import CustomTextComp from '../CustomText';
import BottomModalComp from '../BottomModal';
import CustomDividerWithTextComp from '../CustomDividerWithText';
import {
  MaterialCommunityIconsDefaultComp,
  MaterialIconsDefaultComp,
} from '../Icons';
//* sections
import LanguageSelector from './LanguageSelector';
import ThemeSelector from './ThemeSelector';
// import Faq from '../documents/FAQ';
import PrivacyPolicy from '../documents/PrivacyPolicy';
import TermsConditions from '../documents/TermsConditions';
// import Disclaimer from '../documents/Disclaimer';
//* utils
import {ICON_SIZES} from '../../../utils/constant/app/iconSizeConstant';

const LanguageSelectorModal = ({visible, setVisible}) => {
  return (
    <BottomModalComp
      title="common.selectALanguage"
      visible={visible}
      setVisible={setVisible}>
      <LanguageSelector />
    </BottomModalComp>
  );
};

const ThemeSelectorModal = ({visible, setVisible}) => {
  return (
    <BottomModalComp
      title="common.selectATheme"
      visible={visible}
      setVisible={setVisible}>
      <ThemeSelector />
    </BottomModalComp>
  );
};

// const FAQModal = ({visible, setVisible}) => {
//   return (
//     <BottomModalComp
//       title="common.frequentlyAskedQuestions"
//       visible={visible}
//       setVisible={setVisible}>
//       <Faq />
//     </BottomModalComp>
//   );
// };

const PrivacyPolicyModal = ({visible, setVisible}) => {
  return (
    <BottomModalComp
      title="common.privacyPolicy"
      visible={visible}
      setVisible={setVisible}>
      <PrivacyPolicy />
    </BottomModalComp>
  );
};

const TermsConditionsModal = ({visible, setVisible}) => {
  return (
    <BottomModalComp
      title="common.termsOfUse"
      visible={visible}
      setVisible={setVisible}>
      <TermsConditions />
    </BottomModalComp>
  );
};

// const DisclaimerModal = ({visible, setVisible}) => {
//   return (
//     <BottomModalComp
//       title="common.disclaimer"
//       visible={visible}
//       setVisible={setVisible}>
//       <Disclaimer />
//     </BottomModalComp>
//   );
// };

const Container = styled(ViewComp)`
  width: 100%;
  gap: ${props => props.theme.spacing.byHeight(10)};
`;

const RowButton = styled(TouchableOpacityComp)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const SettingsSection = () => {
  const [themeSelectorModalVisible, setThemeSelectorModalVisible] =
    useState(false);

  const [languageSelectorModalVisible, setLanguageSelectorModalVisible] =
    useState(false);

  // const [FAQModalVisible, setFAQModalVisible] = useState(false);

  const [privacyPolicyModalVisible, setPrivacyPolicyModalVisible] =
    useState(false);

  const [termsConditionsModalVisible, setTermsConditionsModalVisible] =
    useState(false);

  // const [disclaimerModallVisible, setDisclaimerModalVisible] = useState(false);

  return (
    <Container>
      <CustomDividerWithTextComp text="common.themeLanguageSettings" />

      <RowButton onPress={() => setThemeSelectorModalVisible(true)}>
        <MaterialCommunityIconsDefaultComp
          name="theme-light-dark"
          size={ICON_SIZES.medium.size}
        />
        <CustomTextComp>common.themeSettings</CustomTextComp>
      </RowButton>

      <RowButton onPress={() => setLanguageSelectorModalVisible(true)}>
        <MaterialIconsDefaultComp
          name="language"
          size={ICON_SIZES.medium.size}
        />
        <CustomTextComp>common.languageSettings</CustomTextComp>
      </RowButton>

      <CustomDividerWithTextComp text="common.helpCenter" />

      {/* <RowButton onPress={() => setFAQModalVisible(true)}>
        <MaterialCommunityIconsDefaultComp
          name="head-question-outline"
          size={ICON_SIZES.medium.size}
        />
        <CustomTextComp>common.frequentlyAskedQuestions</CustomTextComp>
      </RowButton> */}

      <RowButton onPress={() => setPrivacyPolicyModalVisible(true)}>
        <MaterialCommunityIconsDefaultComp
          name="lock-alert-outline"
          size={ICON_SIZES.medium.size}
        />
        <CustomTextComp>common.privacyPolicy</CustomTextComp>
      </RowButton>

      <RowButton onPress={() => setTermsConditionsModalVisible(true)}>
        <MaterialCommunityIconsDefaultComp
          name="file-document-outline"
          size={ICON_SIZES.medium.size}
        />
        <CustomTextComp>common.termsOfUse</CustomTextComp>
      </RowButton>

      {/* <RowButton onPress={() => setDisclaimerModalVisible(true)}>
        <MaterialCommunityIconsDefaultComp
          name="alert-circle-outline"
          size={ICON_SIZES.medium.size}
        />
        <CustomTextComp>common.disclaimer</CustomTextComp>
      </RowButton> */}

      {/* ************************************************************************************** */}

      <ThemeSelectorModal
        visible={themeSelectorModalVisible}
        setVisible={setThemeSelectorModalVisible}
      />

      <LanguageSelectorModal
        visible={languageSelectorModalVisible}
        setVisible={setLanguageSelectorModalVisible}
      />

      {/* <FAQModal visible={FAQModalVisible} setVisible={setFAQModalVisible} /> */}

      <PrivacyPolicyModal
        visible={privacyPolicyModalVisible}
        setVisible={setPrivacyPolicyModalVisible}
      />

      <TermsConditionsModal
        visible={termsConditionsModalVisible}
        setVisible={setTermsConditionsModalVisible}
      />

      {/* <DisclaimerModal
        visible={disclaimerModallVisible}
        setVisible={setDisclaimerModalVisible}
      /> */}
    </Container>
  );
};

export default SettingsSection;
