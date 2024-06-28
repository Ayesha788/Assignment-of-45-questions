console.log("Question no:16");
console.log(
  "Now I found a bigger dinner table so, I am going to invite three more friends"
);
let guests:string[] = ["fatima", "Amna", "fariha", "Naila"];
guests.unshift("Neha");
let middleIndex:number = Math.ceil(guests.length / 2);
guests.splice(middleIndex, 0, "Kiran");
guests.push("Asma");
for (let n = 0; n < guests.length; n++) {
  console.log(
    `Hi ${guests[n]} I would like to invite you to join me for dinner at Mirchili on 29th April at 10'O clock. `
  );
}
let totalGuests:number = guests.length;
console.log(` I invited ${totalGuests} guests for dinner`);
console.log("____________________________________________________________________________________________________________");
console.log("Question no:17");
console.log(
  "Sorry I'm unable to find a large table for dinner,so I can only invite 2 guests"
);
for (let p = guests.length - 1; p > 1; p--) {
  console.log(
    `Sorry ${guests[p]}, I can't invite you to dinner as I'm unable to find a large table for dinner. I hope you will understand my situation `
  );
  guests.pop();
}
  for (let q = 0; q < guests.length; q++) {
  console.log(`${guests[q]} you are still invited for dinner`);
}
console.log("Removing last two names from list also and printing the empty list");
guests.splice(0, 2);
console.log(guests);
console.log(
  "____________________________________________________________________________________________________________"
);
console.log("Question no:18");
let places:string[] = ["Turkey", "Dubai", "Islamabad", "Quettta", "Bahawalpur"];
console.log("original array:" + places);
console.log("Array after sort (not modifying original array):" + [...places].sort());
console.log("original array:" + places);
console.log("Array after reversing it (not modifying original array):" + [...places].reverse());
console.log("original array:" + places);
places.reverse();
console.log("Reverse the array 1st time(modifies the original array):" + places);
places.reverse();
console.log("Reverse the array 2nd time(modifies the original array):" + places);
places.sort();
console.log("Sort the array 1st time(modifies the original array):" + places);
places.sort().reverse();
console.log(" Sort the array in Reverse order(modifies the original array):" + places);
console.log("____________________________________________________________________________________________________________");
console.log("Question no:19");
console.log(" answer is in question  no:16");
console.log("____________________________________________________________________________________________________________");
console.log("Question no:20");
let namesOfCities:string[] = ["Karachi", "Hyderabad", "Kohat", "Sialkot", "Multan"];
console.log("List of Cities");

for (let q = 0; q < namesOfCities.length; q++) {
  console.log(`${q + 1}. ${namesOfCities[q]}`);
}
