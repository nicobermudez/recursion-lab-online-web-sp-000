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

  if(string === "") {
    return "";
  } else {
    return reverseString(string.substring(1)) + string.charAt(0);
  }
}
