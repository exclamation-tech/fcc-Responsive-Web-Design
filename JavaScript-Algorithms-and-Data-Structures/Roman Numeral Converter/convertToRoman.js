// Converts number to roman numeral(takes integer number as input and returns string)
function convertToRoman(num) {
  // Arrays including all combinations of numbers; thousands is special as there aren't any others besides M, so no array is used
  let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let amountOfThousands = num / 1000;

  // Returns corresponding digit with array value
  return (
    "M".repeat(amountOfThousands) +
    hundreds[Math.floor((num % 1000) / 100)] +
    tens[Math.floor((num % 100) / 10)] +
    ones[num % 10]
  );
}
