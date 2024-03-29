import DefaultLayout from '../../layout/DefaultLayout';
import ComponentsView from '../../view/component/Components';
import IconPlayground from '../../view/component/icon/IconPlayground';
import CheckboxPlayground from '../../view/component/checkbox/CheckboxPlayground';
import RadioPlayground from '../../view/component/radio/RadioPlayground';
import TextPlayground from '../../view/component/text/TextPlayground';
import TextInputPlayground from '../../view/component/textInput/TextInputPlayground';
import DropdownPlayground from '../../view/component/dropdown/DropdownPlayground';
import ButtonPlayground from '../../view/component/button/ButtonPlayground';
//* components
import {CustomScrollViewDefaultComp} from '../../components/custom/CustomScrollViews';
import CustomTextComp from '../../components/custom/CustomText';
//* utils
import {TEXT_VARIANTS} from './app/textVariantConstant';
import {SIZES} from './app/sizeConstant';

export const COMPONENT_NAVIGATORS = {
  COMPONENTS: {
    name: 'components',
    component: props => (
      <CustomScrollViewDefaultComp>
        <DefaultLayout>
          <ComponentsView {...props} />
        </DefaultLayout>
      </CustomScrollViewDefaultComp>
    ),
    options: {
      title: 'components.componentsScreenTitle',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
      headerLeft: () => {
        return null;
      },
    },
    initialRouteName: true,
  },

  ICON: {
    name: 'icon',
    component: props => (
      <CustomScrollViewDefaultComp>
        <DefaultLayout>
          <IconPlayground {...props} />
        </DefaultLayout>
      </CustomScrollViewDefaultComp>
    ),
    options: {
      title: 'components.iconPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },

  CHECKBOX: {
    name: 'checkbox',
    component: props => (
      <CustomScrollViewDefaultComp>
        <DefaultLayout>
          <CheckboxPlayground {...props} />
        </DefaultLayout>
      </CustomScrollViewDefaultComp>
    ),
    options: {
      title: 'components.checkboxPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },

  RADIO_BUTTON: {
    name: 'radio-button',
    component: props => (
      <CustomScrollViewDefaultComp>
        <DefaultLayout>
          <RadioPlayground {...props} />
        </DefaultLayout>
      </CustomScrollViewDefaultComp>
    ),
    options: {
      title: 'components.radioButtonPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },

  TEXT: {
    name: 'text',
    component: props => (
      <CustomScrollViewDefaultComp>
        <DefaultLayout>
          <TextPlayground {...props} />
        </DefaultLayout>
      </CustomScrollViewDefaultComp>
    ),
    options: {
      title: 'components.typographyPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },

  TEXT_INPUT: {
    name: 'text-input',
    component: props => (
      <CustomScrollViewDefaultComp>
        <DefaultLayout>
          <TextInputPlayground {...props} />
        </DefaultLayout>
      </CustomScrollViewDefaultComp>
    ),
    options: {
      title: 'components.textInputPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },

  DROPDOWN: {
    name: 'dropdown',
    component: props => (
      <CustomScrollViewDefaultComp>
        <DefaultLayout>
          <DropdownPlayground {...props} />
        </DefaultLayout>
      </CustomScrollViewDefaultComp>
    ),
    options: {
      title: 'components.dropdownPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },

  BUTTON: {
    name: 'button',
    component: props => (
      <CustomScrollViewDefaultComp>
        <DefaultLayout>
          <ButtonPlayground {...props} />
        </DefaultLayout>
      </CustomScrollViewDefaultComp>
    ),
    options: {
      title: 'components.buttonPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },
};

export const getComponentNavigatorsConstantAsArray = () => {
  let initialRouteName = '';
  let screens = [];

  for (const key in COMPONENT_NAVIGATORS) {
    const navigator = COMPONENT_NAVIGATORS[key];

    if (navigator.initialRouteName) {
      initialRouteName = navigator.name;
    }

    screens.push({
      name: navigator.name,

      component: navigator.component,

      ...(navigator.options ? {options: navigator.options} : {}),

      ...(navigator.initialParams
        ? {initialParams: navigator.initialParams}
        : {}),
    });
  }

  return {initialRouteName, screens};
};
