console.log("Question no 31");

let userNames:string[] = ["Ali", "Shayan", "Admin", "Ahmed", "subhan"];
for (let i = 0; i <= userNames.length; i++) {
  if (userNames[i] == "Admin") {
    console.log("Hello admin, Would you like to see a status report?");
  } else {
    console.log(`Hello ${userNames[i]}, Thank you for loggin in again `);
  }
}
console.log("removing elements from array");
userNames.splice(0,userNames.length)

if (userNames.length == 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i <= userNames.length; i++) {
    if (userNames[i] == "Admin") {
      console.log("Hello admin, Would you like to see a status report?");
    } else {
      console.log(`Hello ${userNames[i]}, Thank you for loggin in again `);
    }
  }
}
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 32");
let current_users:string[] = ["sara", "fatima", "noor", "haya", "hania"];
let new_users:string[] = ["eman", "noor", "sara", "ayesha", "asma"];
new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(
      `Person will need to enter a new username as ${newUser} is already used`
    );
  } else {
    console.log("User name is available");
  }
});
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 33");
let numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let k = 0; k < numbers.length; k++) {
  if (numbers[k] == 1) console.log(`${numbers[k]}st`);
  else if (numbers[k] == 2) console.log(`${numbers[k]}nd`);
  else if (numbers[k] == 3) console.log(`${numbers[k]}rd`);
  else console.log(`${numbers[k]}th`);
}
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 34");
let favoritePizza:string[] = ["supreme", "BBQ chicken", "chicken fajita"];
for (let k = 0; k < favoritePizza.length; k++) {
  console.log(favoritePizza[k]);
  console.log(`I like ${favoritePizza[k]} pizza`);
}
console.log(
  "the supreme pizza offers ahearty mix of meats and veggies on a rich tomato base.BBQ Chicken pizza combine smoky BBQ sauce,grilled chicken and red onions for a sweet-savory delight.Chicken Fajita pizza features zesty Tex-Mex flavors with grilled chicken, bell pepper, and onions onspiced base.I really Love pizza!."
);
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 35");

let animals:string[] = ["dog", "cat", "rabbit"];
for (let k = 0; k < animals.length; k++) {
  console.log(animals[k]);
  if (animals[k]==="dog") {
    console.log(
      `${animals[k]}s are loyal,affectionate, and playful companions, known for their intelligence and protective nature`
    );
  }
  if (animals[k]==="cat") {
    console.log(
      `${animals[k]}s'inquistive nature and graceful movements make them endlessly fascinating companions.`
    );
  }
  if (animals[k]==="rabbit") {
    console.log(
      `${animals[k]}s are known for their soft fur and gentle, affectionate nature`
    );
  }
}

console.log("Any of these animals would make a great pet!");
