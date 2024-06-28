console.log("Question no 42");
var magicians = [
    "Harry houdini",
    "David copperfield",
    "criss Angel",
    "Ricky Jay",
];
function make_great(arr) {
    for (var j = 0; j < arr.length; j++) {
        arr[j] = "great " + arr[j];
    }
}
function show_magicians(arr) {
    console.log("Names of Magicians are:");
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
make_great(magicians);
show_magicians(magicians);
