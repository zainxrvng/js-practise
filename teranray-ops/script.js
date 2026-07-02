let number = 5;
let message;

// if (number % 2 === 0) {
//   message = "even number";
// } else {
//   message = "odd number";
// }

let message2 = number % 2 === 0 ? "even number" : "odd number";

console.log(message2);

let isloggedin = false;

function showelcome() {
  return isloggedin && "the user is logged in welcome user"
}

console.log(showelcome());
