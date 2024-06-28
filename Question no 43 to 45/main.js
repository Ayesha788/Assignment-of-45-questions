var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("Question no 43");
var original_magician_array = [
    "Harry houdini",
    "David copperfield",
    "criss Angel",
    "Ricky Jay",
];
var great_magician_array = original_magician_array.slice();
function make_great(arr) {
    for (var j = 0; j < arr.length; j++) {
        arr[j] = "great " + arr[j];
    }
}
function show_array(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
make_great(great_magician_array);
show_array(original_magician_array);
show_array(great_magician_array);
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 44");
function make_sandwich() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(" You ordered ".concat(arr, " sandwich"));
}
make_sandwich("chicken", "cheesy");
make_sandwich("shami kabab", "egg", "vegetables");
make_sandwich("mayo", "Bar B Q", "onion");
console.log("_____________________________________________________________________________________________________________________");
console.log("Question no 45");
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var myCar = createCar("Honda", "Civic", { color: "Black" });
console.log(myCar);
