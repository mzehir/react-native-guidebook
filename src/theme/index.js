import {Dimensions} from 'react-native';
//* sections
import variants from './variants';
import typography from './typography';

const {height, width} = Dimensions.get('window');
const defaultDeviceHeightValue = 866; // figma desing => 844
const defaultDeviceWidthValue = 390; // figma desing => 390

const createThemePrepare = (themeProps, customThemeProps) => {
  return {
    ...themeProps,
    ...customThemeProps,
  };
};

const createTheme = name => {
  let themeConfig = variants.find(variant => variant.name === name);

  if (!themeConfig) {
    console.log(new Error(`The theme ${name} is not valid`));
    themeConfig = variants[0];
  }

  let _createThemePrepare = createThemePrepare(
    {
      //* breakpoints: Gerekli ise kesme nokta değerleri,
      //* components: Gerekli ise components için tema sıfırlama vs..,
      //* shadows: Gerekli ise gölgelendirmeler,

      spacing: {
        byHeight: px => {
          let ratio = px / defaultDeviceHeightValue;
          let value = ratio * height;
          return `${value}px`;
        },

        byWidth: px => {
          let ratio = px / defaultDeviceWidthValue;
          let value = ratio * width;
          return `${value}px`;
        },
      },

      typography: typography,
      palette: themeConfig.palette,
    },
    {
      name: themeConfig.name,
      statusBar: themeConfig.statusBar,
      appBar: themeConfig.appBar,
      bottomTab: themeConfig.bottomTab
    },
  );

  return _createThemePrepare;
};

export default createTheme;
