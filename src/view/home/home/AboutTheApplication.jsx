import React from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
//* section
import NpmPackagesSection from './aboutTheApplicationSections/npmPackages/NpmPackages';
import ProjectStructureSection from './aboutTheApplicationSections/projectStructure/ProjectStructure';
//* utils
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import { SIZES } from '../../../utils/constant/app/sizeConstant';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContentWrapper = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const AboutTheApplicationSection = () => {
  return (
    <Container>
      <CustomTextComp
        style={{textAlign: 'center'}}
        variant={TEXT_VARIANTS.TITLE.value}>
        components.aboutTheApplication
      </CustomTextComp>

      <CustomTextComp
        style={{textAlign: 'center'}}
        variant={TEXT_VARIANTS.LABEL.value}
        size={SIZES.small.value}>
        components.applicationDescription
      </CustomTextComp>

      <ContentWrapper>
        <NpmPackagesSection />

        <ProjectStructureSection />
      </ContentWrapper>
    </Container>
  );
};

export default AboutTheApplicationSection;
