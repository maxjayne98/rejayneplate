export const createEmptyArray = (size: number) => {
  return Array.from(Array(size).keys());
};

export const showComponentBy10percentProb = () => {
  return Math.floor(Math.random() * 100) % 10 === 0;
};

export const addThousandSeparator = (integer: any, separator = ",") => {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`);
};

export const removeComma = (value: any) => {
  return value.toString().replace(/,/g, "");
};

export const isObjectEmpty = (value: any) => {
  if (!value) return true;
  if (Object.keys(value).length > 0) return false;
  return true;
};
