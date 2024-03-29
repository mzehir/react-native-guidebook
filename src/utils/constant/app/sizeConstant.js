export const SIZES = {
  small: {value: 'small', label: 'Small'},
  medium: {value: 'medium', label: 'Medium'},
  large: {value: 'large', label: 'Large'},
};

export const getSizesConstantAsArray = () => {
  return Object.values(SIZES);
};
