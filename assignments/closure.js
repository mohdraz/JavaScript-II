// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let age = 0;
const ageCounter = () => {
  
  return function() {
    return age+= 5; 
  }
}

const newAge = ageCounter();
console.log(newAge());
console.log(newAge());
console.log(newAge());
console.log(age);



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count=0;
  return function () {
    return ++count;
  }
};

const newCounter = counter();
for (let i=0; i < 10; i++) {
  console.log(newCounter());
}
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let increment = 0;
  let decrement = 20;
  return {
    increment: function () {
     return ++increment;
    },
    decrement: function () {
     return --decrement;
    }
  }
};

let newFactCounter = counterFactory (); 

for (let i=0; i<15; i++) {
  console.log("increming by 1: " + newFactCounter.increment());
}

for (let i=0; i<20; i++) {
  console.log("decrementing by 1: " + newFactCounter.decrement());
}
