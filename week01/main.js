console.log("Hi")
$(document).ready(function () {
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
    $(".out").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
    
});

// Question 1
var teamName;
teamName = "Real";
console.log("declared: " + teamName);

// Question 2
console.log("Round to nearest integer: " + Math.round(7.25));


// Question 3
var colors = [" red", " blue", " green"];
console.log("Array of Colors: " + colors);

// Question 4
console.log("Lenght of Array: " + colors.length);

// Question 5
var a = "Hedayat";
var b = "Samadi";
if (typeof a === typeof b) {
    console.log("SAME TYPE");
} else {
    console.log("Different Type");
}

// Question 6
var x = 7;
x = x % 3;
console.log("New Value of X ="+""+ x);

// Question 7 1s-part
var array =["Hedayat", "samadi", 1, 2, 3];
for (var i=0; i<array.length; i++) {
    console.log("store multiple types in an array: " + array[i]);
}
// Questin 7 sec-part
function compareInfinities(d, e) {
    if(!isFinite(d) && !isFinite(e))
        return "Both variables are infinities";
    else
        return "both variables are not infinite";
}
var variable1 = 6/0;
var variable2 = 10/0;
var result = compareInfinities(variable1, variable2);
console.log("Compare inifities: " + result);

