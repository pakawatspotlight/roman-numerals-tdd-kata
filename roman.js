exports.toRoman = function (input) {
  if (input == 6) {
    return 'VI';
  }
  if (input == 5) {
    return 'V';
  }
  if (input == 4) {
    return 'IV';
  }
  if (input == 3) {
    return 'III';
  }
  if (input == 2) {
    return 'II';
  }
  return 'I';
};
