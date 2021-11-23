/**
 * Author:    Jonathan
 * Created:   in my house
 *
 * (c) Copyright by me
 **/

 function isOdd(x) {
  if (x === 0) return false;

  return (x & -x) === 1;
}

array = [12,445,32,33337,28];

  console.log("My array",  array);


  var result = array.map(isOdd);

  console.log("array go crazy" , result);

  var result = array.map(function(x){
    return x ** 0.7;

  })

  console.log("the the 0.7 power", result);
