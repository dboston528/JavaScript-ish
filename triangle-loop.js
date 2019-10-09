//stupid while loop version of th triangle

let line = "#";
while (line.length <= 8) {
console.log(line);
line = line + "#";    
}

//The for loop (reccomended)
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

// This code should run two identical triangles 



