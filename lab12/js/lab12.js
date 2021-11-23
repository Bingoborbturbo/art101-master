/**
 * Author:    Name
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/


 function colorsInRainbow(str){
   var length = str.length;
   var mod = length % 4;
   if (mod == 0){
     return "Yellow";
   }
   else if (mod == 1){
     return "Blue";
   }
   else if (mod == 2){
     return "Green";

   }
   else if (mod == 3){
     return "Red";
   }
 }

 var myButton = document.getElemntById("button");
 myButton.addEventListener("click", function(){
   var name = document.getElementById("input").value;
   var ChosenColor = colorsInRainbow(name);
   newText = " Your chosen color is " + ChosenColor + "</p>";
   document.getElemntById("output").innerHTML = newText;
 })
