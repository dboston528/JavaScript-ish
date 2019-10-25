console.log('hello');

for (let number = 0; number <= 12; number = number += 2) {
  console.log(number);
}

for (let line = '#'; line.length <= 8; line += line) {
  console.log(line);
}

//Nested Arrays
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      product = arr[i][j] * product;
      console.log(arr[i][j]);
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
