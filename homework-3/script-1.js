const yourName = prompt("What's Your Name?");
const yourSurname = prompt("What's Your Surname?");
const yourFavoriteNumber = prompt("What's Your Favorite Number");
console.log(yourName);
console.log(yourSurname);
console.log(yourFavoriteNumber);
console.log(`"Hello,${yourName} ${yourSurname}! Your Favorite Number Is ${yourFavoriteNumber}"`);
const firstNumber = +prompt("Enter Please The First Number");
const secondaryNumber = +prompt("Enter Please The Secondary Number");
const sum = firstNumber + secondaryNumber;
console.log(sum);
const difference = firstNumber - secondaryNumber;
console.log(difference);
const multiplication = firstNumber * secondaryNumber;
console.log(multiplication);
const division = firstNumber / secondaryNumber;
console.log(division);
const userAge = prompt("What year were you born?");
console.log("User year's born is", userAge);
const remainder = firstNumber % secondaryNumber;
console.log(`"Remainder of a number"${firstNumber} by number ${secondaryNumber} equal ${remainder}`);
const thirdNumber = +prompt("Enter Please The Third Number For Pairing Checks");
const isPairingNumber = thirdNumber % 2 === 0;
console.log(isPairingNumber);