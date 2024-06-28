
console.log("Question no 43");
let original_magician_array = [
  "Harry houdini",
  "David copperfield",
  "criss Angel",
  "Ricky Jay",
];
let great_magician_array = original_magician_array.slice();
function make_great(arr: string[]) {
  for (let j = 0; j < arr.length; j++) {
    arr[j] = "great " + arr[j];
  }
}

function show_array(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
make_great(great_magician_array);
show_array( original_magician_array);
show_array(great_magician_array);
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 44");

function make_sandwich(...arr: string[]) {
  console.log(` You ordered ${arr} sandwich`);
}
make_sandwich("chicken", "cheesy");
make_sandwich("shami kabab", "egg", "vegetables");
make_sandwich("mayo", "Bar B Q", "onion");
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 45");
type car = {
  manufacture: string;
  model: string;
  [key: string]: any;
};
function createCar(
  manufacture: string,
  model: string,
  optional: Record<string, any>
): car {
  return {
    manufacture,
    model,
    ...optional,
  };
}
const myCar: car = createCar("Honda", "Civic", { color: "Black" });
console.log(myCar);
