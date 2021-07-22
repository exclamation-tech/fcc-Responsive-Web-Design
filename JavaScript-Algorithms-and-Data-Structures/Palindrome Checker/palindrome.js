// Function to check if palindrome(takes string as input, and returns boolean)
function palindrome(str) {
  // Cleans str, and converts to list for easier processing
  let cleanedStr = str
    // Case is not considered
    .toLowerCase()
    // Splits all non alphanumeric characters
    .split(/[^a-z0-9]/)
    // Gets rid of empty elements in the array
    .filter((elem) => elem != "")
    // Joins and splits in order to make each individual character part of the array
    .join("")
    .split("");

  // Checks every value in array to see if matches
  return cleanedStr.every(
    (char, index, this) => char == this[this.length - index - 1]
  );
}
