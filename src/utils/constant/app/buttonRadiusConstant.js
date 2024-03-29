export const BUTTON_RADIUS = {
  LITTLE: {value: 'little', label: 'Little'},
  FEW: {value: 'few', label: 'Few'},
  NORMAL: {value: 'normal', label: 'Normal'},
  MORE: {value: 'more', label: 'More'},
  MUCH: {value: 'much', label: 'Much'},
  PLENTY: {value: 'plenty', label: 'Plenty'},
  MANY: {value: 'many', label: 'Many'},
};

export const getButtonRadiusConstantAsArray = () => {
  return Object.values(BUTTON_RADIUS);
};
