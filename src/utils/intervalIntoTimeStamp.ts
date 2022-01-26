import { BigNumberish } from 'ethers';

const intervalIntoTimeStamp = (interval: string): BigNumberish => {
  const date = new Date();
  date.setDate(date.getDate() + parseInt(interval));
  const dateTimeStamp = Date.parse(date.toString());
  return dateTimeStamp;
};

export default intervalIntoTimeStamp;
