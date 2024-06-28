console.log("Question no:11");
var names = ["Hina", "Laiba", "Maria", "Hafsa"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log("____________________________________________________________________________________________________________");
console.log("Question no:12 I am using arrray of question 11");
for (var i = 0; i < names.length; i++) {
    console.log("Hello ".concat(names[i], "! How are you?"));
}
console.log("____________________________________________________________________________________________________________");
console.log("Question no:13");
var modesOfTransportation = ["Helicopter", "Motor Cycle", "Jeep", "Ship"];
for (var j = 0; j < modesOfTransportation.length; j++) {
    console.log("I would like to own a ".concat(modesOfTransportation[j]));
}
console.log("____________________________________________________________________________________________________________");
console.log("Question no:14");
var guests = ["fatima", "Amna", "fariha", "Naila"];
for (var k = 0; k < guests.length; k++) {
    console.log("Hi ".concat(guests[k], " I would like to invite you to join me for dinner at Mirchili on 29th April at 10'O clock."));
}
console.log("____________________________________________________________________________________________________________");
console.log("Question no:15 using array of question 14");
console.log("Fariha is busy.She can't join us. So, I am going to invite Hira");
guests[2] = "Hira";
for (var m = 0; m < guests.length; m++) {
    console.log("Hi ".concat(guests[m], " I would like to invite you to join me for dinner at Mirchili on 29th April at 10'O clock."));
}
console.log("Now I found a bigger dinner table so I am going to invite three more friends");
