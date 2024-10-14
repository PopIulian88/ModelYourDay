export const generateCode: () => string = () => {
  return Math.floor(999 + Math.random() * 9000).toString();
};
