console.log("Question no 26");
var alien_color = "green";
//Version 1:Runs the IF block
if (alien_color == "green") {
    console.log("The player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
// Version 2:Runs the else block
alien_color = "Red";
if (alien_color == "green") {
    console.log("The player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 27");
//version 1:(green)
alien_color = "green";
if (alien_color == "green") {
    console.log("the player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color == "red") {
    console.log("the player earned 15 points");
}
//version 2:(Yellow)
alien_color = "yellow";
if (alien_color == "green") {
    console.log("the player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color == "red") {
    console.log("the player earned 15 points");
}
//version:3(Red)
alien_color = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color == "red") {
    console.log("the player earned 15 points");
}
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 28");
var age = 23;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("the person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("the person is a adult");
}
else if (age >= 65) {
    console.log("the person is an elder");
}
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 29");
var favoriteFruit = ["Coconut", "Mango", "Grapes"];
if (favoriteFruit[0] == "Coconut") {
    console.log("You really like Coconut");
}
if (favoriteFruit[1] == "Apples") {
    console.log("You really like Apples");
}
if (favoriteFruit[1] == "Mango") {
    console.log("You really like Mango");
}
if (favoriteFruit[2] == "Orange") {
    console.log("You really like Orange");
}
if (favoriteFruit[2] == "Grapes") {
    console.log("You really like Grapes");
}
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 30");
var userNames = ["Ali", "Shayan", "Admin", "Ahmed", "subhan"];
for (var i = 0; i <= userNames.length; i++) {
    if (userNames[i] == "Admin") {
        console.log("Hello admin, Would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames[i], ", Thank you for logging in again "));
    }
}
