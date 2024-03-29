export const ICON_SIZES = {
  small: {key: 'small', size: 15},
  medium: {key: 'medium', size: 21},
  large: {key: 'large', size: 27},
};

//? ---------------------------------------------------

export const ICON_POSITION = {
  start: {value: 'start', label: 'Start'},
  end: {value: 'end', label: 'End'},
};

export const getIconPositionConstantAsArray = () => {
  return Object.values(ICON_POSITION);
};
