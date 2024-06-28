console.log("Question no 41");
let magicians: string[] = [
  "Harry houdini",
  "David copperfield",
  "criss Angel",
  "Ricky Jay",
];
function show_magicians(arr: string[]) {
  console.log("Names of Magicians are:");

  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}
show_magicians(magicians);