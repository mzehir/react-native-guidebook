import React from 'react';
import styled from '@emotion/native';
//* components
import ViewComp from '../../core/View';
import CustomTextComp from '../CustomText';

const SectionTitleText = styled(CustomTextComp)`
  font-weight: 500;
`;

const SectionSpacer = styled(ViewComp)`
  margin-bottom: 25px;
`;

const Faq = () => {
  return (
    <ViewComp>
      <Question1 />

      <SectionSpacer />

      <Question2 />

      <SectionSpacer />

      <Question3 />

      <SectionSpacer />

      <Question4 />

      <SectionSpacer />

      <Question5 />

      <SectionSpacer />

      <Question6 />

      <SectionSpacer />
    </ViewComp>
  );
};

export default Faq;

const Question1 = () => {
  return (
    <ViewComp>
      <SectionTitleText>What is a privacy policy?</SectionTitleText>
      <CustomTextComp>
        A privacy policy is a legal document that informs individuals about how
        an organization/individual collects, uses, discloses, and manages their
        personal data. It outlines the ways in which personal information is
        handled, including details about data collection, storage, and sharing
        practices. Essentially, it provides transparency to users regarding
        their privacy rights and how their data is treated.
      </CustomTextComp>
    </ViewComp>
  );
};

const Question2 = () => {
  return (
    <ViewComp>
      <SectionTitleText>What is personal data?</SectionTitleText>
      <CustomTextComp>
        Personal data refers to any information related to an identified or
        identifiable living individual. It encompasses various identifiers, such
        as names, email addresses, phone numbers, home addresses, IP addresses,
        and more. Essentially, any data that can be used to identify a specific
        person falls under the category of personal data.
      </CustomTextComp>
    </ViewComp>
  );
};

const Question3 = () => {
  return (
    <ViewComp>
      <SectionTitleText>Why is a privacy policy important?</SectionTitleText>
      <CustomTextComp>
        A privacy policy is a critical component of any Service Provider's
        online presence, as it outlines the handling and protection of sensitive
        customer information. It establishes trust between the service provider
        and its customers, demonstrating a commitment to protecting their
        personal data. A well-crafted privacy policy can help prevent legal
        liabilities and reputational damages, while also providing transparency
        and clarity on how customer information is collected, used, and shared.
        By having a comprehensive privacy policy in place, organizations can
        maintain a competitive advantage, build customer loyalty, and foster a
        positive brand image.
      </CustomTextComp>
    </ViewComp>
  );
};

const Question4 = () => {
  return (
    <ViewComp>
      <SectionTitleText>
        Is it safe to use a privacy policy template?
      </SectionTitleText>
      <CustomTextComp>
        Yes, using a privacy policy template is generally safe and efficient.
        Templates are designed to align with data protection laws, ensuring
        compliance. However, it's essential to customize the template to
        accurately reflect your specific practices and business context. Always
        review and tailor the template to suit your needs.
      </CustomTextComp>
    </ViewComp>
  );
};

const Question5 = () => {
  return (
    <ViewComp>
      <SectionTitleText>What are terms and condition?</SectionTitleText>
      <CustomTextComp>
        Terms and conditions are a critical component of contractual agreements,
        ensuring that all parties have a clear understanding of their rights and
        responsibilities. These terms are incorporated into a legally binding
        agreement, adhering to relevant local, state, and federal laws. They
        establish essential boundaries that all parties must adhere to,
        providing clarity on acceptable and prohibited platform usage, managing
        user expectations, and outlining procedures for account termination and
        suspension. Additionally, these terms specify the governing laws
        applicable to the contract, provide mechanisms for dispute resolution,
        and address necessary disclaimers or warranties as required by law. By
        incorporating these terms into a legal agreement, businesses and
        customers can ensure they are fully informed of their rights and
        obligations, promoting a mutually beneficial relationship.
      </CustomTextComp>
    </ViewComp>
  );
};

const Question6 = () => {
  return (
    <ViewComp>
      <SectionTitleText>
        Why is this Privacy Policy Generator free?
      </SectionTitleText>
      <CustomTextComp>
        This project was built out of a need for a free and open source Privacy
        Policy Generator for my Android applications.
      </CustomTextComp>
      <CustomTextComp>
        Most such products online are pay walled or find ways to extract money
        from indie devs like me. I built this for myself first, but eventually
        saw how it was useful for a lot of people. Today this webapp is used by
        people from all over the world, and I hope it will continue to be so.
      </CustomTextComp>
    </ViewComp>
  );
};
