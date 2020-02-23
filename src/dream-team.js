module.exports = function createDreamTeam(arr) {
  // if (!Array.isArray(arr)) {
  //   return false
  // }

  // let result=[];

  // for (let i = 0; i < arr.length; i++) {
  //   if (typeof arr[i] === "string") {
  //     result.push(arr[i].trim()[0].toUpperCase());
  //   }
  // }

  // return result.sort().join("");

  if (!Array.isArray(arr)) {
      return false
    }

  return arr.filter(item => typeof item === "string").map(item => item.trim()[0].toUpperCase()).sort().join("");
};

