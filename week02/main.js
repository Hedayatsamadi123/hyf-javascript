console.log("Hi")
//Question 1
function sum(x, y, z ) {
    return x+y+z;
  }
  console.log("sum of arguments: " + sum(1, 2, 3));

// Question 2 
function colorcar(color) {
    return "a" + color + "car";
}
console.log("Function colorcar: " + colorcar(" red "));

// Question 3
var obj = {name: "Hedayat", age: "21"}
console.log("Question 3 " + obj.name, obj.age);

// Question 4
function vechicleType(color, code) {
    var string = "a" + color + "";
    if (code === 1){
        string = string + "car";
    } else if (code === 2){
        string = string + "motorbike";
    }
    return string;
}
console.log("vechicleType: " + vechicleType(" blue ", 2));

// Question 5 
console.log("Without if statement: " + (3 === 3));

// Question 6
function vehicle(color, code, age, size) {
    let string = "a " + color;
    if (age === 1) {
        string = string + " new";
    } else if (age > 1) {
        string = string + " used";
    }
    if (code === 1) {
        string = string + " car";
    } else if (code === 2) {
        string = string + " motorbike";
    }
    return string;
}
console.log("blue used car: " + vehicle("blue", 1, 5));
// Question 7
var list = [" motorbike", " caravan", " bike", " car"];
console.log("car list: " + list);

// Question 8
var bike = list[2];
console.log("Third Element: " + bike);

// Question 9 








// Question 10
function advert() {
    var string = "Amazing Joe's Garage, we service";
    for (var i = 0; i < list.length; i++) {
        if (i === list.length - 1){
            string = string + "and" + list[i] + "s.";
        } else {
            string = string + list[i] + "s. ";  
        }
    }
    return string;
}
console.log("Advertisement: " + advert());

// Question 11 
list.push(" bicycle");
console.log("Add one more to the list: " + advert());

// Question 12 
var obj = {name: ""}
console.log("Empty object" + obj.name);

// Question 13













$(document).ready(function () {
    $(".total").text("6");
});
