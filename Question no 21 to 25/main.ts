console.log("Question no 21");
type city = {
  existInProvince: string;
  existInCountry: string;
  famousFor: string;
};
let Karachi: city = {
  existInProvince: "Sindh",
  existInCountry: "Pakistan",
  famousFor: "Sea Ports",
};
let Hyderabad: city = {
  existInProvince: "Sindh",
  existInCountry: "Pakistan",
  famousFor: "Rani Bagh",
};
let Kohat: city = {
  existInProvince: "KPK",
  existInCountry: "Pakistan",
  famousFor: "Guava",
};
let Sialkot: city = {
  existInProvince: "Punjab",
  existInCountry: "Pakistan",
  famousFor: "sports items",
};
let Multan: city = {
  existInProvince: "Punjab",
  existInCountry: "Pakistan",
  famousFor: "Mango",
};
console.log(Karachi);
console.log(Hyderabad);
console.log(Kohat);
console.log(Sialkot);
console.log(Multan);
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 22");
let num: number[] = [2, 5, 6, 7, 3];
console.log(
  "intentional index error as I am trying to access 5 index and my array has only(0,1,2,3,4) indexes "
);
console.log(num[5]);
console.log(
  "now I am fixing this index error by pushing element at 5th index and running the same command again"
);
num.push(8);
console.log(num[5]);
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 23");
let car: string = "subaru";
//test:1
console.log("1.Is car== 'subaru'? I Predict True");
console.log(car == "subaru");
//test:2
console.log("2.Is car1!= 'subaru'? I Predict false");
console.log(car != "subaru");
//test:3
console.log("3.Is car=== 'subaru'? I Predict True");
console.log(car === "subaru");
//test:4
console.log("4.Is car!== 'subaru'? I Predict false");
console.log(car !== "subaru");
//test:5
console.log("5.Is car > 'BMW'? I Predict True");
console.log(car > "BMW");
//test:6
console.log("6.Is car < 'BMW'? I Predict false");
console.log(car < "BMW");
//test:7
console.log("7.Is car>= 'Honda'? I Predict True");
console.log(car >= "Honda");
//test:8
console.log("8.Is car<= 'Honda'? I Predict false");
console.log(car <= "Honda");
//test:9
console.log("9.Is car  not equals to null? I Predict True");
console.log(car != null);
//test:10
console.log("10.Is car equals to null? I Predict False");
console.log(car == null);
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 24");
//1.test for equality with string
let icecream: string = "Cornetto";
console.log("1.Is icecream=='Cornetto'? predict true");
console.log(icecream == "Cornetto");
//2.test for inequality with string
console.log("2.Is icecream!='Cornetto'? predict false");
console.log(icecream != "Cornetto");
//3.tests using lowercase function
console.log("3.Is icrecream.lowercase=='cornetto'? predict True");
console.log(icecream.toLowerCase() == "cornetto");
//4.Numerical test involving equality
let num1:number = 5;
let num2:number = 8;
console.log(`num1=${num1} and num2=${num2}`);

console.log("4.Is num1==5? I predict true");
console.log(num1 == 5);
//5.Numerical test involving inequality
console.log("5.Is num1!=5? I predict False");
console.log(num1 != 5);
//6.Numerical test involving greater than
console.log("6.Is num2>num1? I predict True");
console.log(num2 > num1);
//7.Numerical test involving less than
console.log("7.Is num2<num1? I predict False");
console.log(num2 < num1);
//8.Numerical test involving greater than and equal to
console.log("8.Is num2>=4? I predict True");
console.log(num2 >= 4);
//9.Numerical test involving less than and equal to
console.log("9.Is num2<=2? I predict False");
console.log(num2 <= 2);
//10. Test using and
console.log("10.Is num1>3 && num1<7? I predict True");
console.log(num1 > 3 && num1 < 7);
//11.Test using OR
console.log("11.Is num2==3 || num2<7? I predict False");
console.log(num2 == 3 || num2 < 7);
//12.Test whether item is in  a array
let numArr:number[] = [2, 7, 8, 9];
console.log("number Array:" + numArr);

console.log("12. Is 2 exist in numArr(It will check for second index whether it exist or not) ? I predict True");
console.log(2 in numArr);
//13.Test whether item not in a array
console.log("13.Is 3 not exist in numArr(It will check for 3rd index whether it exist or not)? I predict false");
console.log(!(3 in numArr));
console.log(
  "_____________________________________________________________________________________________________________________"
);
console.log("Question no 25");
let alien_color: string = "green";
if (alien_color == "green") {
  console.log("The player just earned 5 points");
}