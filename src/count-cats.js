module.exports = function countCats(arr) {
  // let counter = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     if (arr[i][j] === "^^") {
  //       counter++;
  //     }
  //   }
  // }

  // return counter;

  let counter = 0;
  arr.map(i => i.map(j => j === "^^" ? counter++ : counter));
  return counter;
};
