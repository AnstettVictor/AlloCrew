export const date = (uglyDate) => {
  let myDate = new Date(uglyDate);
  return myDate.toLocaleDateString();
}