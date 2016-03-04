var roman = require('../roman.js');
var assert = require('assert');

describe('roman', function () {
  describe('toRoman', function () {

    function testToRoman(input, expected) {
      it('should convert ' + input + ' to ' + expected, function () {
        var result = roman.toRoman(input);
        assert.equal(result, expected);
      });
    }

    testToRoman(1, 'I');
    testToRoman(2, 'II');
    testToRoman(3, 'III');
    testToRoman(4, 'IV');
    testToRoman(5, 'V');
    testToRoman(6, 'VI');
    testToRoman(7, 'VII');
    testToRoman(8, 'VIII');
    testToRoman(9, 'IX');
    testToRoman(10, 'X');
    testToRoman(11, 'XI');
    testToRoman(12, 'XII');
    testToRoman(13, 'XIII');
    testToRoman(14, 'XIV');
    testToRoman(15, 'XV');
    testToRoman(16, 'XVI');
    testToRoman(17, 'XVII');
    testToRoman(18, 'XVIII');
  });
});
