export const calculateRequiredPayments = (
  deadline: number,
  startRentalUTC: number
) => {
  if (startRentalUTC === 0) return 0;

  const requiredPaymentsInSec = Math.abs(deadline - startRentalUTC);
  const requiredPayments = Math.round(requiredPaymentsInSec / 86400) / 7;
  return requiredPayments;
};
