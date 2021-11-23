/**
 * Author:  Jonathan Palafox
 * Created:   10/25/2021
 *
 * (c) Copyright by me
 **/


function sortUserName() {

var userName = window.prompt("Hi, Please tell me your name so i can make it go crazy it");
console.log("userName =", userName);

var nameArray = userName.split('');
console.log("nameArray =", nameArray);

var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort );

var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);

return nameSorted;

}

document.writeln("Oh hey, I fixed your name: ",
                  sortUserName(), "</br>");
