console.log("Question no 36");
function make_shirt(size:string, message:string):void
{
  console.log(`The size of shirt is ${size} and the ${message} printed on it`);
  

}
make_shirt("small","hello");
make_shirt("medium","keep Calm");
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 37");
function make_shirt1(size:string="large", message:string="I Love TypeScript"):void
{
  console.log(`The size of shirt is ${size} and the ${message} printed on it`);
  

}
make_shirt1();
make_shirt1("medium");
make_shirt1("small","Keep Calm and Code On")
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 38");
function describe_city(city: string, country: string = "pakistan"):void {
  console.log(`${city} is in ${country}`);
}
describe_city("Islamabad");
describe_city("Lahore");
describe_city("Shanghai", "China");
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 39");

function city_country(city: string, country: string):string {
  return (`"${city},${country}"`);
}
console.log( city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "America"));
console.log(city_country("Istanbul", "Turkey"));
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 40");
function make_album(artistName:string,albumTitle:string){
  return{artistName,albumTitle}
}


let album1=make_album("Arsalan Haider","Waves of times");
let album2=make_album("Waqar Nasir","Aurora Dreams");
let album3=make_album("Naheed Ahmed","Whispers in the wind");

console.log(album1);
console.log(album2);
console.log(album3);
function make_album1(artistName:string,albumTitle:string,numberOfTracks?:number)
{
  return {artistName,albumTitle,numberOfTracks}
}

let album4=make_album1("kamran Ali","Timeless Waves",43);
let album5=make_album1("Irfan Ahmed","Radiant Shadows",34);
let album6=make_album1("Rohan khan","Mystic Horizons",30);

console.log(album4);
console.log(album5);
console.log(album6);