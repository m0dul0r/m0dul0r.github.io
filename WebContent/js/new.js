// This is my JavaScript code for assignment 

function mouseOver() {
    var str = document.getElementById("demo").innerHTML; 
var x = Math.floor((Math.random() * 1e10) + 1);
    var res = str.replace("Mouse over me", x);
    document.getElementById("demo").innerHTML = res; }