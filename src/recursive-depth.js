module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let arrDepth = 0;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          arrDepth = Math.max(arrDepth, this.calculateDepth(arr[i]))
        }
        }
      arrDepth++
      return arrDepth;
  }
};
