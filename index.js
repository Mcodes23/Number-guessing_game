"use strict";
let flag = true;
while (flag) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let userNumber = +prompt("Enter a number between 1 and 10: ");

  if (
    userNumber == null ||
    isNaN(userNumber) ||
    userNumber < 1 ||
    userNumber > 100
  ) {
    alert("Invalid input Enter a number between 1 and 10");
  } else if (userNumber < randomNumber) {
    alert("Too low try again");
  } else if (userNumber > randomNumber) {
    alert("Too high try again");
  } else {
    alert("You win!");
    flag = false;
  }
}
