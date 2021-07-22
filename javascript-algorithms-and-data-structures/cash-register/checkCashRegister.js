// Function that finds if change can be returned for an item, takes three arguments and returns an object with a key for status and change
function checkCashRegister(price, cash, cid) {
  // Maps the monetary value of each currency unit
  const currencyValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 20,
    TWENTY: 60,
    "ONE HUNDRED": 100,
  };

  // Defines variables that are to be used later
  let amountNeeded = cash - price;
  let change = [];

  // Finds the total amount of cash inside the drawer.
  let totalInDrawer =
    cid.reduce((total, array) => total + array[1] * 100, 0) / 100;

  // Bit of filtering before doing actual function
  if (totalInDrawer < amountNeeded) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalInDrawer == amountNeeded) {
    change = cid;
    return { status: "CLOSED", change: change };
  }

  // Iterates over each item in cash drawer, reverses to start from highest value(hundreds)
  cid.reverse().forEach((elem) => {
    // Variables that are used for calculations
    let currencyValue = currencyValues[elem[0]];
    let currencyAmount = Math.round(elem[1] / currencyValues[elem[0]]);

    // If the change is not too big then continue
    if (amountNeeded > currencyValue && currencyAmount > 0) {
      // How many of currency to take(ex: 3 quarters)
      let amountCanTake = Math.floor(amountNeeded / currencyValue);

      //If there's excess currency, then just give however many can be taken, if there's no excess, then just give all the currency
      if (amountCanTake <= currencyAmount) {
        amountNeeded -= amountCanTake * currencyValue;
        change.push([elem[0], amountCanTake * currencyValue]);
      } else {
        amountNeeded -= elem[1];
        change.push([elem[0], elem[1]]);
      }
      // Prevent floating point errors(Not sure if this is the right way to do so, but it works in this scenario at least )
      amountNeeded = Math.round(amountNeeded * 100) / 100;
    }
  });
  // If there isn't enough funds, let them know, else, return status as open and change given.
  if (amountNeeded > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: change };
}
