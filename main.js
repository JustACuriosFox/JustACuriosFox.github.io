var buttonUp = document.getElementById("button");
var backgroundColor = true
buttonUp.onclick = function() { myfunction(); return false; }

function myfunction(){
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