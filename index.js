function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  let newString = ""
  if(string <= 1) {
    return newString;
  } else {
    let newString = newString + string.substring(0, -1)
    reverseString()
  }
}
