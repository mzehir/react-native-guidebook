import React, {useEffect, useState} from 'react';
import styled from '@emotion/native';
import LanguageUseContext from '../../../../../hooks/LanguageUseContext';
//* components
import ViewComp from '../../../../../components/core/View';
import CustomTextComp from '../../../../../components/custom/CustomText';
import AccordionComp from '../../../../../components/custom/accordion/AccordionComp';
//* utils
import {getNpmDependenciesConstantAsArray} from '../../../../../utils/constant/app/npmPackagesConstant';
import {TEXT_VARIANTS} from '../../../../../utils/constant/app/textVariantConstant';
import {SIZES} from '../../../../../utils/constant/app/sizeConstant';
import {COLORS} from '../../../../../utils/constant/app/colorConstant';

const ItemWrapper = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NpmPackagesSection = () => {
  const {translate} = LanguageUseContext();

  const [dependenciesFields, setDependenciesFields] = useState({
    title: '',
    content: [],
  });

  useEffect(() => {
    const {dependenciesTitle, dependencies} =
      getNpmDependenciesConstantAsArray();

    let descriptionTitleKey = translate('components.version');

    let _dependencies = dependencies.map(item => {
      let data = {
        title: item.name,
        descriptionTitle: `${descriptionTitleKey}: ${item.version}`,
        description: item.description,
        link: item.npmLink,
        linkText: 'components.goToNpm',
      };

      return data;
    });

    setDependenciesFields({title: dependenciesTitle, content: _dependencies});
  }, []);

  return (
    <ItemWrapper>
      <CustomTextComp
        style={{textAlign: 'left'}}
        variant={TEXT_VARIANTS.TITLE.value}
        size={SIZES.medium.value}
        color={COLORS.INFO.value}>
        {dependenciesFields.title}
      </CustomTextComp>

      <AccordionComp data={dependenciesFields.content} />
    </ItemWrapper>
  );
};

export default NpmPackagesSection;
