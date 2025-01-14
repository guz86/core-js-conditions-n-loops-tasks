/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = c;
  if (a > b && a > c) result = a;
  if (b > a && b > c) result = b;
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) return false;

  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let tempNum = num;

  if (tempNum >= 10) {
    for (let i = 0; i < Math.floor(tempNum / 10); i += 1) {
      result += 'X';
    }
    tempNum %= 10;
  }

  if (tempNum === 9) {
    result += 'IX';
    tempNum -= 9;
  } else if (tempNum >= 5) {
    result += 'V';
    tempNum -= 5;
  }

  if (tempNum === 4) {
    result += 'IV';
  } else {
    for (let i = 0; i < tempNum; i += 1) {
      result += 'I';
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  const processDigit = (char) => {
    switch (char) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '-':
        result += 'minus';
        break;
      case ',':
        result += 'point';
        break;
      case '.':
        result += 'point';
        break;
      default:
        break;
    }
  };

  for (let i = 0; i < numberStr.length; i += 1) {
    processDigit(numberStr[i]);
    if (i !== numberStr.length - 1) result += ' ';
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = num;
  while (result !== 0) {
    const lastDigit = result % 10;
    if (lastDigit === digit) return true;
    result = Math.floor(result / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let left = 0;
    let right = 0;

    for (let j = 0; j < i; j += 1) {
      left += arr[j];
    }

    for (let k = i + 1; k < arr.length; k += 1) {
      right += arr[k];
    }

    if (left === right) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let top = 0;
  let bot = size - 1;
  let left = 0;
  let right = size - 1;
  let value = 0;

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  while (top <= bot && left <= right) {
    for (let i = left; i <= right; i += 1) {
      value += 1;
      matrix[top][i] = value;
    }

    top += 1;

    for (let i = top; i <= bot; i += 1) {
      value += 1;
      matrix[i][right] = value;
    }

    right -= 1;

    for (let i = right; i >= left; i -= 1) {
      value += 1;
      matrix[bot][i] = value;
    }

    bot -= 1;

    for (let i = bot; i >= top; i -= 1) {
      value += 1;
      matrix[i][left] = value;
    }

    left += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixRef = matrix;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i; j < matrix[0].length; j += 1) {
      [matrixRef[i][j], matrixRef[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrixRef.length; i += 1) {
    for (let j = 0; j < matrixRef[i].length / 2; j += 1) {
      const temp = matrixRef[i][j];
      matrixRef[i][j] = matrixRef[i][matrixRef[i].length - 1 - j];
      matrixRef[i][matrixRef[i].length - 1 - j] = temp;
    }
  }

  return matrixRef;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} result - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const result = arr;
  const partition = (low, high) => {
    const pivot = result[high];
    let i = low - 1;
    for (let j = low; j < high; j += 1) {
      if (result[j] <= pivot) {
        i += 1;
        [result[i], result[j]] = [result[j], result[i]];
      }
    }
    [result[i + 1], result[high]] = [result[high], result[i + 1]];
    return i + 1;
  };

  const quickSort = (low, high) => {
    if (low < high) {
      const pi = partition(low, high);
      quickSort(low, pi - 1);
      quickSort(pi + 1, high);
    }
  };

  quickSort(0, result.length - 1);
  return result;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const previousResults = [str];
  let length = 0;
  let result = str;

  function mix(currentStr, index) {
    let evenChars = '';
    let oddChars = '';

    if (length) {
      return previousResults[(index + 1) % length];
    }

    for (let k = 0; k < currentStr.length; k += 2) {
      evenChars += currentStr[k];
    }

    for (let j = 1; j < currentStr.length; j += 2) {
      oddChars += currentStr[j];
    }

    const newStr = evenChars + oddChars;

    if (previousResults[0] === newStr) {
      length = index + 1;
      return previousResults[0];
    }

    previousResults[index + 1] = newStr;
    return previousResults[index + 1];
  }

  for (let i = 0; i < iterations; i += 1) {
    result = mix(result, i);
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function getDigitArray(num) {
    let originalNumber = num;
    const digits = [];

    while (originalNumber > 0) {
      const digit = originalNumber % 10;
      digits.unshift(digit);
      originalNumber = (originalNumber - digit) / 10;
    }
    return digits;
  }

  function findOurDigit(arr) {
    for (let i = arr.length - 2; i >= 0; i -= 1) {
      if (arr[i] < arr[i + 1]) {
        return i;
      }
    }
    return -1;
  }

  function findSmallestDigitPosition(arr, position) {
    const subarray = [];
    for (let i = position + 1; i < arr.length; i += 1) {
      subarray.push(arr[i]);
    }

    let smallestDigit = Number.POSITIVE_INFINITY;
    let smallestDigitPosition = -1;
    for (let i = 0; i < subarray.length; i += 1) {
      const digit = subarray[i];
      if (digit > arr[position] && digit < smallestDigit) {
        smallestDigit = digit;
        smallestDigitPosition = position + 1 + i;
      }
    }
    return smallestDigitPosition;
  }

  function swapElements(arr, position1, position2) {
    const tempArray = arr;
    const temp = tempArray[position1];
    tempArray[position1] = tempArray[position2];
    tempArray[position2] = temp;

    return tempArray;
  }

  function sortFromPosition(arr, position) {
    const tempArray = arr;
    const subarray = [];
    for (let i = position + 1; i < arr.length; i += 1) {
      subarray.push(arr[i]);
    }
    subarray.sort((a, b) => a - b);
    tempArray.splice(position + 1, subarray.length, ...subarray);
    return tempArray;
  }

  const digitArray = getDigitArray(number);
  const findDigit = findOurDigit(digitArray);
  const findRightSmallDigit = findSmallestDigitPosition(digitArray, findDigit);
  swapElements(digitArray, findDigit, findRightSmallDigit);
  const result = sortFromPosition(digitArray, findDigit);

  return parseInt(result.join(''), 10);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
