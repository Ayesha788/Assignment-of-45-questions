console.log("Question no 42");
let magicians = [
  "Harry houdini",
  "David copperfield",
  "criss Angel",
  "Ricky Jay",
];

function make_great(arr: string[]) {
  for (let j = 0; j < arr.length; j++) {
    arr[j] = "great " + arr[j];
  }
}
function show_magicians(arr: string[]) {
  console.log("Names of Magicians are:");

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

make_great(magicians);
show_magicians(magicians);