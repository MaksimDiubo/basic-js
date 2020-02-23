module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw "Error";
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case "--discard-next":
        i < arr.length - 2 ? i++ : false;
        break;
      case "--discard-prev":
        result.pop();
        break;
      case "--double-next":
        i < arr.length - 2 ? result.push(arr[i + 1]) : false;
        break
      case "--double-prev":
        i > 0 ? result.push(arr[i - 1]) : false;
        break;
      default:
        result.push(arr[i]);
    }
  }
  return result;
  //   if (arr[i] == "--discard-next" && i < arr.length - 1) {
  //     arr.splice(i, 1);
  //   }

  //   if (arr[i] == "--discard-prev" && i > 0) {
  //     arr.splice(i, 1);
  //   }

  //   if (arr[i] == "--double-next" && i < arr.length - 1) {
  //     arr.splice(i, 1, i + 1);
  //   }

  //   if (arr[i] == "--double-prev"  && i > 0) {
  //     arr.splice(i, 1, i - 1);
  //   }
  // }

};
