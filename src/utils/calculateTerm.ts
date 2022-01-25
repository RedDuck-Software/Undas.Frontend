export const calculateTerm = (interval: number) => {
  if (!interval) return;

  const date = new Date().valueOf();
  const termInSeconds = Math.abs(interval - date) / 999;
  const term = Math.floor(termInSeconds / 86400);
  return term;
};
