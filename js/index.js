// Parte 1
let hacker1 = "Rubén"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Irene"
console.log(`The navigator is ${hacker2}`)


// Parte 2
let driverLength = hacker1.length;
let navLength = hacker2.length;

if (driverLength > navLength) {
  console.log(`The driver has the longest name, it has ${driverLength} characters.`);
} else if (navLength > driverLength) {
  console.log(`the navigator has the longest name, it has ${navLength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}

// Parte 3

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

// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum orci a imperdiet consectetur. Aliquam erat volutpat. Pellentesque arcu nisi, molestie et est tristique, mollis ornare erat. Etiam a nisl mattis, aliquam enim id, porta lacus. Pellentesque et hendrerit dolor. Proin facilisis risus sit amet neque ultrices lobortis. Nulla porta velit sit amet vestibulum faucibus. Sed auctor ipsum nunc, non fermentum sem maximus etCras facilisis facilisis nisi non scelerisque. Morbi semper venenatis finibus. Nulla aliquam ipsum id magna eleifend efficitur. In hac habitasse platea dictumst. Nam egestas dolor nec faucibus fringilla. Nulla finibus interdum magna. Morbi euismod massa a velit tincidunt, sit amet ultricies turpis dapibus. Nam ut mi vestibulum, rutrum sapien sit amet, ornare erat. Proin auctor mi sed odio aliquet, vitae vestibulum diam rutrum. Sed luctus lectus vel ultrices semper. In id feugiat turpis. Vivamus vel libero vitae eros tincidunt facilisis. Pellentesque non nulla ullamcorper, rhoncus urna vel, condimentum massa. Praesent at lectus gravida, euismod urna id, varius quam. Nullam ullamcorper finibus vestibulum.Nunc posuere nec orci eget tristique. Mauris accumsan pulvinar dolor, vel maximus nisi commodo fermentum. Suspendisse et neque risus. Pellentesque eget urna sed purus convallis varius. Vivamus eget dignissim leo. Phasellus cursus enim ex, sed tempor metus tristique non. Praesent interdum, nunc eu fermentum faucibus, metus lorem mollis sapien, eu auctor odio augue at ligula. Nulla ac ultrices purus, quis rhoncus arcu. Donec ultrices commodo iaculis. Curabitur a lobortis mauris. Suspendisse nisi nibh, consequat vel tellus sed, hendrerit mattis nisi."

const longTextWords = longText.split(' ');
console.log(longTextWords);


