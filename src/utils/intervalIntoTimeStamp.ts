import { BigNumberish } from "ethers";

const intervalIntoTimeStamp = (interval: string): BigNumberish => {
  console.log(`interval: ${interval}`);
  const currentTimeStamp = Date.now();
  if (interval === "for 7 days") {
    return currentTimeStamp + 604800000;
  } else if (interval === "for 14 days") {
    return currentTimeStamp + 1209600000;
  } else {
    console.log("something wrong with staking deadline");
    return "";
  }
};

export default intervalIntoTimeStamp;
