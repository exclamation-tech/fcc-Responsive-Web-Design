// Checks to see if input resembles a valid telephone number(takes string as input and returns a boolean value as output)
function telephoneCheck(str) {
  // Removes all white spaces from str because the spaces are not important
  let newStr = str.replace(/\s/g, "");

  // Regex that matches telephone!
  let telephoneRegex = new RegExp("^1?(\\d{3}-?|\\(\\d{3}\\))\\d{3}-?\\d{4}$");

  return telephoneRegex.test(newStr);
}
