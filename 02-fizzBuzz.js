// Opción 1

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(i);
  }
}

// Opción 2

for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} Fizz Buzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(i);
  }
}

// Opción 3
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 == 0) output += "Fizz";
  if (i % 5 == 0) output += "Buzz";
  console.log(output || i);
}
