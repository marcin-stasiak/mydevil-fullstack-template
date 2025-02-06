export const isSSR = () => {
  return process.title !== 'browser';
};
