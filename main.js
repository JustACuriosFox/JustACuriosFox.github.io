var buttonUp = document.getElementById("button");
var backgroundColor = true
buttonUp.onclick = function() { colorchange(); return false; }

function colorchange(){
    console.log("function");
    if (backgroundColor == true){
        document.getElementById("body").style.backgroundColor = "red";
        document.getElementById("header1").style.textDecorationColor = "lightblue";
        document.getElementById("header1").style.color= "lightblue";
        backgroundColor = false;
    }
    else{
        document.getElementById("body").style.backgroundColor = "lightblue";
        document.getElementById("header1").style.textDecorationColor = "red";
        document.getElementById("header1").style.color = "red";
        backgroundColor = true;
    }
}

//

var buttonMü = document.getElementById("müllknopf");
var backgroundColor = true
buttonMü.onclick = function() { müllfunction(); return false; }

function müllfunction(){
    window.location.href="./Page2.html";

}

//

var buttonEp = document.getElementById("epilepsie");
var backgroundColor = true
buttonEp.onclick = function() { epilepsie(); return false; }

function epilepsie(){
    window.location.href="./Page2.html";

}