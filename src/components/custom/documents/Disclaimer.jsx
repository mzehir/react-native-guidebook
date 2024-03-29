import React from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../../core/View';
import CustomTextComp from '../CustomText';

const Container = styled(ViewComp)``;

const SectionSpacer = styled(ViewComp)`
  margin-bottom: 25px;
`;

const Disclaimer = () => {
  return (
    <Container>
      <DisclaimerSection />

      <SectionSpacer />
    </Container>
  );
};

export default Disclaimer;

const DisclaimerSection = () => {
  return (
    <ViewComp>
      <CustomTextComp>
        This template for Privacy Policy and Terms & Conditions is furnished on
        an "AS IS" basis, devoid of any express or implied warranties or
        conditions. It serves as a reference document for you while drafting
        your own privacy policy. The developer of the App Privacy Policy
        Generator disclaims any liability for the legal implications arising
        from the utilization of this privacy policy or terms & conditions. It is
        strongly recommended to obtain independent legal counsel to ensure
        compliance with all regulations applicable to the users of your
        application. The developer of the App Privacy Policy Generator cannot be
        held accountable for any direct or indirect damage/loss incurred by an
        individual/company as a result of using this document.
      </CustomTextComp>
    </ViewComp>
  );
};
