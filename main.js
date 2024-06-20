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
    window.location.href="./page2.html";
}

//

var buttonEp = document.getElementById("epilepsie");
var backgroundColor = true
buttonEp.onclick = function() { epilepsie(); return false; }

var i = 0;
function change(){
    var color = ["red", "lightblue"];

    document.getElementById("body").style.backgroundColor = color[(i + 1) % color.length];
    document.getElementById("header1").style.textDecorationColor = color[i];
    document.getElementById("header1").style.color= color[i];
    i = (i + 1) % color.length;
}

function epilepsie(){
    setInterval(change, 60);
}