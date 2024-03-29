export const BUTTON_VARIANTS = {
  TEXT: {value: 'text', label: 'Text'},
  OUTLINED: {value: 'outlined', label: 'Outlined'},
  CONTAINED: {value: 'contained', label: 'Contained'},
};

export const getButtonVariantsConstantAsArray = () => {
  return Object.values(BUTTON_VARIANTS);
};
