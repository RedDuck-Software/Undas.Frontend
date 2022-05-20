export const getId = (number: number) => {
  let id = "";

  if (number < 10) {
    id = `00${number}`;
  } else if (number < 100) {
    id = `0${number}`;
  } else {
    id = `${number}`;
  }

  return id;
};
