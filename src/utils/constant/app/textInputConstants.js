export const KEYBOARD_TYPES = {
  default: {value: 'default', label: 'Default'},
  numeric: {value: 'numeric', label: 'Numeric'},
};

export const getKeyboardTypesConstantAsArray = () => {
  return Object.values(KEYBOARD_TYPES);
};

//? ---------------------------------------------------

export const TYPES_OF_USE = {
  default: {value: 'default', label: 'Default'},
  password: {value: 'password', label: 'Password'},
  search: {value: 'search', label: 'Search'},
};

export const getTypesOfUseConstantAsArray = () => {
  return Object.values(TYPES_OF_USE);
};
