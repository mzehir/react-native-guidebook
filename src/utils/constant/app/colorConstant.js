export const COLORS = {
  STANDARD: {value: 'standard', label: 'Standard'},
  ERROR: {value: 'error', label: 'Error'},
  INFO: {value: 'info', label: 'Info'},
  PRIMARY: {value: 'primary', label: 'Primary'},
  SECONDARY: {value: 'secondary', label: 'Secondary'},
  SUCCESS: {value: 'success', label: 'Success'},
  WARNING: {value: 'warning', label: 'Warning'},
};

export const getColorsConstantAsArray = () => {
  return Object.values(COLORS);
};
