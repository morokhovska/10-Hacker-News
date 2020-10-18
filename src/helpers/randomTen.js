export const randomTen = (arr) => {
  const newArr = [];

  for (let i = 0; i < 10; i++) {
    newArr.push(arr[Math.floor(Math.random() * (arr.length + 1))]);
  }

  return newArr;
};
