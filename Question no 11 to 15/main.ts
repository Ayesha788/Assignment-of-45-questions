console.log("Question no:11");
let names:string[] = ["Hina", "Laiba", "Maria", "Hafsa"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log("____________________________________________________________________________________________________________");
console.log("Question no:12 I am using arrray of question 11");
for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}! How are you?`);
}
console.log("____________________________________________________________________________________________________________");
console.log("Question no:13");
let modesOfTransportation:string[] = ["Helicopter", "Motor Cycle", "Jeep", "Ship"];
for (let j = 0; j < modesOfTransportation.length; j++) {
  console.log(`I would like to own a ${modesOfTransportation[j]}`);
}
console.log("____________________________________________________________________________________________________________");
console.log("Question no:14");
let guests:string[] = ["fatima", "Amna", "fariha", "Naila"];
for (let k = 0; k < guests.length; k++) {
  console.log(
    `Hi ${guests[k]} I would like to invite you to join me for dinner at Mirchili on 29th April at 10'O clock.` )
  }
console.log("____________________________________________________________________________________________________________");
console.log("Question no:15 using array of question 14");
console.log("Fariha is busy.She can't join us. So, I am going to invite Hira");
guests[2] = "Hira";
for (let m = 0; m < guests.length; m++) 
{
  console.log(`Hi ${guests[m]} I would like to invite you to join me for dinner at Mirchili on 29th April at 10'O clock.`);
}
