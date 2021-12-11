
//lab10
// 12/5/2021
// Jonathan Palafox
// Borrow the nameSort() function or my anagram() function from Lab 7.


function nameSort(userName){
  // Splits string using method

  return(userName.split('').sort().join(''));
}

// Attach an event listener to your button that does the following:
var buttonEl = document.getElementById("my-button");

buttonEl.addEventListener('click', function() {
     var inputValue = document.getElementById('my-input');
     var name = inputValue.value;

     // Runs that value through your sort() or anagram() function and saves
     var newName = nameSort(name);

     console.log("New name:", newName);

     var outputEl = document.getElementById("output");
     var outputStr = document.createElement("p");
     outputStr.innerHTML = "Your new sorted name is " + newName;
     outputEl.appendChild(outputStr);
   });
