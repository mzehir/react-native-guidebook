import React from 'react';
//* components
import CustomPaperComp from '../../../../../components/custom/CustomPaper';
import CustomTextComp from '../../../../../components/custom/CustomText';
import ViewComp from '../../../../../components/core/View';
//* utils
import {TEXT_VARIANTS} from '../../../../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../../../../utils/constant/app/colorConstant';
import {SIZES} from '../../../../../utils/constant/app/sizeConstant';

const sectionPaperPadding = {
  paddingHorizontal: '15',
  paddingVertical: '15',
};

const ProjectStructureSection = () => {
  return (
    <ViewComp style={{display: 'flex', flexDirection: 'column', gap: 5}}>
      <CustomTextComp
        style={{textAlign: 'left'}}
        variant={TEXT_VARIANTS.TITLE.value}
        size={SIZES.medium.value}
        color={COLORS.INFO.value}>
        components.projectStructure
      </CustomTextComp>

      <CustomPaperComp {...sectionPaperPadding}>
        <CustomTextComp isTranslate={false} color={COLORS.WARNING.value}>
          src/
          {'\n'}├─ components/
          {'\n'}│ ├─ core/
          {'\n'}│ │ ├─ ...
          {'\n'}│ ├─ custom/
          {'\n'}│ │ ├─ ...
          {'\n'}├─ contexts/
          {'\n'}│ ├─ AccessToGlobalSettingsContext.js
          {'\n'}│ ├─ LanguageContext.js
          {'\n'}│ ├─ ThemeContext.js
          {'\n'}├─ hooks/
          {'\n'}│ ├─ AccessToGlobalSettingsContext.js
          {'\n'}│ ├─ LanguageUseContext.js
          {'\n'}│ ├─ ThemeUseContext.js
          {'\n'}├─ i18n/
          {'\n'}│ ├─ locales/
          {'\n'}│ │ ├─ de.json
          {'\n'}│ │ ├─ en.json
          {'\n'}│ │ ├─ tr.json
          {'\n'}│ ├─ i18n.js
          {'\n'}├─ layout/
          {'\n'}│ ├─ AuthLayout.jsx
          {'\n'}│ ├─ DefaultLayout.jsx
          {'\n'}├─ navigators/
          {'\n'}│ ├─ custom/
          {'\n'}│ │ ├─ ...
          {'\n'}│ ├─ stack/
          {'\n'}│ │ ├─ ...
          {'\n'}│ ├─ tab/
          {'\n'}│ │ ├─ ...
          {'\n'}│ ├─ Navigator.jsx
          {'\n'}├─ redux/
          {'\n'}│ ├─ slices/
          {'\n'}│ │ ├─ ...
          {'\n'}│ ├─ store/
          {'\n'}│ │ ├─ store.js
          {'\n'}├─ theme/
          {'\n'}│ ├─ index.js
          {'\n'}│ ├─ typography.js
          {'\n'}│ ├─ variants.js
          {'\n'}├─ utils/
          {'\n'}│ ├─ constants/
          {'\n'}│ │ ├─ app/
          {'\n'}│ │ │ ├─ ...
          {'\n'}│ │ ├─ languageConstant.js
          {'\n'}│ │ ├─ navigatorAuthConstant.js
          {'\n'}│ │ ├─ navigatorComponentConstant.js
          {'\n'}│ │ ├─ navigatorHomeConstant.js
          {'\n'}│ │ ├─ themeConstant.js
          {'\n'}│ ├─ helper/
          {'\n'}│ │ ├─ storageOperations.js
          {'\n'}├─ view/
          {'\n'}│ ├─ ...
          {'\n'}├─ App.js
        </CustomTextComp>
      </CustomPaperComp>
    </ViewComp>
  );
};

export default ProjectStructureSection;
