export const calculateTerm = (interval: number) => {
  if (!interval) return;

  const date = new Date().valueOf() / 1000;
  const termInSeconds = Math.abs(interval - date);
  const term = Math.ceil(termInSeconds / 86400);
  return term;
};
