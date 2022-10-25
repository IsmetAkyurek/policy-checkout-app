type IsEqual = <T, U>(value: T, target: U) => boolean;

const isEqual: IsEqual = (value, target) => {
  return JSON.stringify(value) === JSON.stringify(target);
};

export default isEqual;
