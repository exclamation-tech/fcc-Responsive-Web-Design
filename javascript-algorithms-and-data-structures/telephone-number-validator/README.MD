# Telephone Number Validator

Made heavy use of regex in this challenge.

Regex explanation for future me because regex is complicated:

The regex: `^1?(\d{3}-?|\(\d{3}\))\d{3}-?\d{4}$`

`^` Makes sure the that the number starts at the right place(askldjasljd 555-555-5555 is not a valid looking number :P)

`1?` Needs to be a US number, so first character must be a one(if there is an extra first character), but it is optional(the `?` means zero or one)

`(\d{3}-?|\(\d{3}\))` Matches the first group of three digits(the `\d` is a digit from zero to nine), while the `{3}` indicates that they should match three of those digits. The `|` basically serves as an OR operator, meaning that the regex can match either the first set(no parentheses), or the second(yes parantheses)

`\d{3}-?` Second group of three digits, with an optional dash following it'

`\d{4}` Third group of digits, there are four here

`$` Opposite of the `^` operator, makes sure that the phone number ends correctly. (So regex won't match 555-555-5555 askjdasljdaskl)

[freeCodeCamp problem link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator)
