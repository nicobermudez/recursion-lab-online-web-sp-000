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

  if(string <= 1) {
    return string;
  } else {
    string = string + string.substring(0, -1)
    reverseString(newString)
  }
}
