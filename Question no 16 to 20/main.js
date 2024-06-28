var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Question no:16");
console.log("Now I found a bigger dinner table so, I am going to invite three more friends");
var guests = ["fatima", "Amna", "fariha", "Naila"];
guests.unshift("Neha");
var middleIndex = Math.ceil(guests.length / 2);
guests.splice(middleIndex, 0, "Kiran");
guests.push("Asma");
for (var n = 0; n < guests.length; n++) {
    console.log("Hi ".concat(guests[n], " I would like to invite you to join me for dinner at Mirchili on 29th April at 10'O clock. "));
}
var totalGuests = guests.length;
console.log(" I invited ".concat(totalGuests, " guests for dinner"));
console.log("____________________________________________________________________________________________________________");
console.log("Question no:17");
console.log("Sorry I'm unable to find a large table for dinner,so I can only invite 2 guests");
for (var p = guests.length - 1; p > 1; p--) {
    console.log("Sorry ".concat(guests[p], ", I can't invite you to dinner as I'm unable to find a large table for dinner. I hope you will understand my situation "));
    guests.pop();
}
console.log("Removing last two names from list also and printing the empty list");
for (var q = 0; q < guests.length; q++) {
    console.log("".concat(guests[q], " you are still invited for dinner"));
}
guests.splice(0, 2);
console.log(guests);
console.log("____________________________________________________________________________________________________________");
console.log("Question no:18");
var places = ["Turkey", "Dubai", "Islamabad", "Quettta", "Bahawalpur"];
console.log("original array:" + places);
console.log("Array after sort (not modifying original array):" + __spreadArray([], places, true).sort());
console.log("original array:" + places);
console.log("Array after reversing it (not modifying original array):" + __spreadArray([], places, true).reverse());
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
var namesOfCities = ["Karachi", "Hyderabad", "Kohat", "Sialkot", "Multan"];
console.log("List of Cities");
for (var q = 0; q < namesOfCities.length; q++) {
    console.log("".concat(q + 1, ". ").concat(namesOfCities[q]));
}
