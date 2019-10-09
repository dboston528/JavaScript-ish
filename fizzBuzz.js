
//My answer original answer
// for (let number = 1; number < 100; number += 1){
//   if(number % 3 == 0){
//     console.log(number + " fizz");
    
//   } else if (number % 5 == 0){
//     console.log(number + " buzz");
   
//   } else if (number % 5 == 0 && number % 3 == 0){
//     console.log(number + " fizzBuzz");
//   }
// }


for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
