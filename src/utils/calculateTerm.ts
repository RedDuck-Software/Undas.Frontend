export const calculateTerm = (interval: number) => {
  if (!interval) return;

  const date = new Date().valueOf();
  const termInSeconds = Math.abs(interval - date) / 1000;
  const term = Math.ceil(termInSeconds / 86400);
  return term;
};
