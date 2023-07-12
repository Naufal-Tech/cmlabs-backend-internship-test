function fizzBuzz() {
  // Set num as a variable and set it to 1 as its value, and loop <= 100 (sampai num 100), dan increment num by 1 (num++)
  for (let num = 1; num <= 100; num++) {
    // Check apakah angka bisa habis dibagi 3 dan 5
    if (num % 3 === 0 && num % 5 === 0) {
      // Jika bisa print FizzBuzz
      console.log("FizzBuzz");
      // Check apakah angka bisa habis dibagi 3
    } else if (num % 3 === 0) {
      // Jika bisa print Fizz
      console.log("Fizz");
      // Check apakah angka bisa habis dibagi 5
    } else if (num % 5 === 0) {
      // Jika bisa print Buzz
      console.log("Buzz");
    } else {
      // Selebihnya print numbernya
      console.log(num);
    }
  }
}

// Eksekusi Regular Function
console.log("Regular Function:");
fizzBuzz();

const FizzBuzz = () => {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
};

// Eksekusi Arrow Function
console.log("Arrow Function:");
FizzBuzz();
