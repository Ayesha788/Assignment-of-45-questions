console.log("Question no 36");
function make_shirt(size, message) {
    console.log("The size of shirt is ".concat(size, " and the ").concat(message, " printed on it"));
}
make_shirt("small", "hello");
make_shirt("medium", "keep Calm");
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 37");
function make_shirt1(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("The size of shirt is ".concat(size, " and the ").concat(message, " printed on it"));
}
make_shirt1();
make_shirt1("medium");
make_shirt1("small", "Keep Calm and Code On");
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 38");
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Islamabad");
describe_city("Lahore");
describe_city("Shanghai", "China");
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 39");
function city_country(city, country) {
    return ("\"".concat(city, ",").concat(country, "\""));
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "America"));
console.log(city_country("Istanbul", "Turkey"));
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 40");
function make_album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = make_album("Arsalan Haider", "Waves of times");
var album2 = make_album("Waqar Nasir", "Aurora Dreams");
var album3 = make_album("Naheed Ahmed", "Whispers in the wind");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album1(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = make_album1("kamran Ali", "Timeless Waves", 43);
var album5 = make_album1("Irfan Ahmed", "Radiant Shadows", 34);
var album6 = make_album1("Rohan khan", "Mystic Horizons", 30);
console.log(album4);
console.log(album5);
console.log(album6);
