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

function isPalindrome(string) {
  if (string.length < 2) {
    return true;
  } else {
    if(string[0] === string[string.length -1]) {
      return isPalindrome(string.substring(1,string.length -1))
    } else {
      return false;
    }
  }
}

function addUpTo(array) {
  if(array.length > 1) {
    return 
  } else {
    return ;
  }
}
