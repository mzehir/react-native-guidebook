import merge from 'deepmerge';
//* utils
import {THEMES} from '../utils/constant/themeConstant';

const defaultVariant = {
  name: THEMES.DEFAULT.key,
  palette: {
    app: {
      components: {
        icon: {
          color: '#777777',
          activeColor: '#333333',
        },
        elementDropdown: {
          inputBackground: '#FFFFFF',
          menuBackground: '#FFFFFF',
          activeItemBackground: '#EFF4FB',
          inputBorderColor: '#C4C4C4',
          inputBorderColorFocus: '#376FD0',
          placeholderColor: '#A4A4A4',
          textColor: '#212121',
        },
        input: {
          backgroundColor: '#FFFFFF',
          textColor: '#212121',
          placeholderColor: '#A4A4A4',
          borderColor: '#C4C4C4',
          borderColorFocus: '#376FD0',
        },
        paper: {
          background: '#FFFFFF',
        },
        modal: {
          background: '#FFFFFF',
        },
        accordion: {
          background: '#FFFFFF',
          borderColor: '#C4C4C4',
        },
      },
    },
    standard: {
      color: '#000',
      borderColor: '#636465',
      background: '#F7F9FC',
      containedColor: 'transparent',
    },
    error: {
      color: '#d32f2f',
      borderColor: 'rgba(211, 47, 47, 0.5)',
      background: '#d32f2f',
      containedColor: '#fff',
    },
    info: {
      color: '#0288d1',
      borderColor: 'rgba(2, 136, 209, 0.5)',
      background: '#0288d1',
      containedColor: '#fff',
    },
    primary: {
      color: '#376fd0',
      borderColor: 'rgba(55, 111, 208, 0.5)',
      background: '#376fd0',
      containedColor: '#FFF',
    },
    secondary: {
      color: '#4782da',
      borderColor: 'rgba(71, 130, 218, 0.5)',
      background: '#4782da',
      containedColor: '#FFF',
    },
    success: {
      color: '#2e7d32',
      borderColor: 'rgba(46, 125, 50, 0.5)',
      background: '#2e7d32',
      containedColor: '#fff',
    },
    warning: {
      color: '#ed6c02',
      borderColor: 'rgba(237, 108, 2, 0.5)',
      background: '#ed6c02',
      containedColor: '#fff',
    },
  },
  statusBar: {
    background: '#233044',
  },
  appBar: {
    background: '#FFFFFF',
    textColor: '',
  },
  bottomTab: {
    background: '#FFFFFF',
    textColor: '',
  },
};

const darkVariant = merge(defaultVariant, {
  name: THEMES.DARK.key,
  palette: {
    app: {
      components: {
        icon: {
          color: '#878D96',
          activeColor: '#EEEEEE',
        },
        elementDropdown: {
          inputBackground: '#233044',
          menuBackground: '#233044',
          activeItemBackground: '#2A4267',
          inputBorderColor: '#56606F',
          inputBorderColorFocus: '#407AD6',
          placeholderColor: '#56606F',
          textColor: '#FFFFFF',
        },
        input: {
          backgroundColor: '#233044',
          textColor: '#FFFFFF',
          placeholderColor: '#56606F',
          borderColor: '#56606F',
          borderColorFocus: '#407AD6',
        },
        paper: {
          background: '#233044',
        },
        modal: {
          background: '#233044',
        },
        accordion: {
          background: '#233044',
          borderColor: '#56606F',
        },
      },
    },
    standard: {
      color: '#FFF',
      borderColor: '#8D939A',
      background: '#1B2635',
      containedColor: 'transparent',
    },
    error: {
      color: '#f44336',
      borderColor: 'rgba(244, 67, 54, 0.5)',
      background: '#f44336',
      containedColor: '#fff',
    },
    info: {
      color: '#29b6f6',
      borderColor: 'rgba(41, 182, 246, 0.5)',
      background: '#29b6f6',
      containedColor: 'rgba(0, 0, 0, 0.87)',
    },
    primary: {
      color: '#407ad6',
      borderColor: 'rgba(64, 122, 214, 0.5)',
      background: '#407ad6',
      containedColor: '#FFF',
    },
    secondary: {
      color: '#4782da',
      borderColor: 'rgba(71, 130, 218, 0.5)',
      background: '#4782da',
      containedColor: '#FFF',
    },
    success: {
      color: '#66bb6a',
      borderColor: 'rgba(102, 187, 106, 0.5)',
      background: '#66bb6a',
      containedColor: 'rgba(0, 0, 0, 0.87)',
    },
    warning: {
      color: '#ffa726',
      borderColor: 'rgba(255, 167, 38, 0.5)',
      background: '#ffa726',
      containedColor: 'rgba(0, 0, 0, 0.87)',
    },
  },
  statusBar: {
    background: '#1B2635',
  },
  appBar: {
    background: '#233044',
    textColor: '',
  },
  bottomTab: {
    background: '#233044',
    textColor: '',
  },
});

const variants = [defaultVariant, darkVariant];

export default variants;
