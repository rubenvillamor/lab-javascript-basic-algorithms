// Iteration 1: Names and Input
let hacker1 = "Rubén"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Google Chrome"
console.log(`The navigator is ${hacker2}`)


// Iteration 2: Conditionals
let driver_length = hacker1.length;
let nav_length = hacker2.length;

if (driver_length > nav_length) {
  console.log(`The driver has the longest name, it has ${driver_length} characters.`);
} else if (nav_length > driver_length) {
  console.log(`the navigator has the longest name, it has ${nav_length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driver_length} characters!`);
}

// Iteration 3: Loops

let driverNameSeparated = '';
for (let i = 0; i < hacker1.length; i++) {
  driverNameSeparated += hacker1[i].toUpperCase() + ' ';
}
console.log(driverNameSeparated.slice());

let navigatorNameReverse = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReverse += hacker2[i];
}
console.log(navigatorNameReverse);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
