/**
 * Author:    Jonathan
 * Created:   11/1/2021
 *
 * (c) Copyright by me
 **/

 var outputEl = document.getElementById("content");

 var new1El = document.createElement("p");

 new1El.innerHTML = "Hi ";

 var new2El = document.createElement("p");

 new2El.innerHTML = "Boot";


outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

new1El.style.color = "blue";
new2El.style.color = "orange";
outputEl.style.backgroundColor = "pink";
