// Ceasers Cipher, rot 13, (takes string(Capital letters only) as input and returns string as output)
function rot13(str) {
  // Regex to test if the character is able to be shifted(in this case, letters will only be capital letters)
  const rot13ableRegex = /[A-Z]/;

  return (
    str
      // Turns it into an array of characters
      .split("")
      // Applies rot 13 on each character
      .map((char) => {
        // Checks if capitalized letter using earlier regex, if so, then apply rot13
        if (rot13ableRegex.test(char)) {
          // Variable to store decimal value of characters
          let decimalChar = char.charCodeAt();
          // Adds or subtracts 13 based on position of character
          return String.fromCharCode(
            decimalChar < 65 + 13 ? decimalChar + 13 : decimalChar - 13
          );
        } else {
          return char;
        }
      })
      .join("")
  );
}
