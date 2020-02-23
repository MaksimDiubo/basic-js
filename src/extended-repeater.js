module.exports = function repeater(str, options) {
  str = String(str);
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  let repeated = function (str, repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|') {
    let result = "";
    for (let i = repeatTimes; i > 0; i--) {
      result += str;
      for (j = additionRepeatTimes; j > 0; j--) {
          addition ? result += addition : result
          j > 1 ? result += additionSeparator : result
        }
      i > 1 ? result += separator : result
    }
    return result;
  }

  return repeated(str, options.repeatTimes, options.separator, options.addition, options.additionRepeatTimes, options.additionSeparator)
}
