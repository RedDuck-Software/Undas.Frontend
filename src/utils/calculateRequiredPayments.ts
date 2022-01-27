export const calculateRequiredPayments = (
  deadline: number,
  startRentalUTC: number
) => {
  if (startRentalUTC === 0) return 0;

  let requiredPaymentsInSec = Math.abs(deadline - startRentalUTC);
  const requiredPayments = Math.ceil(requiredPaymentsInSec / 86400) / 7;
  return requiredPayments;
};
