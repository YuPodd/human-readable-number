const ones = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
};
const teens = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
};
const tens = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
};

module.exports = function toReadable(number) {
    let result = "";
    let string = number.toString();
    let a;
    let b;
    let c;

    switch (string.length) {
        case 1:
            return result = ones[number];
            break;
        case 2:
            b = string.charAt(0);
            c = string.charAt(1);

            break;
        case 3:
            a = string.charAt(0);
            b = string.charAt(1);
            c = string.charAt(2);
    }
    if (a) {
        result = ones[a] + ' hundred';
    }
    if (Number(b) >= 2) {
        result += ' ' + tens[b];
    } else if (Number(b) === 1) {
        result += ' ' + teens[b+c];
        return result.trim();
    } else if (Number(b) === 0) {
        // do nothing
    }
    if (Number(c) !== 0) {
        result += ' ' + ones[c]
    } else if (Number(c) === 0) {
      //do nothing
    }
    return result.trim();
}
