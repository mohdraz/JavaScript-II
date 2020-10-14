// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
     cb(arr.length);
}

getLength(items, function (length) {
  console.log(length);
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
   cb(arr[arr.length -1]);
}

last(items, function(last){
  console.log(last);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
   cb(x+y)
}

sumNums(2,9, (addition) => {
  console.log(addition);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
   cb(x*y);
}

multiplyNums(8,10, product => console.log(product) );

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  // for (let i = 0; i < list.length; i++ ) {

  //   if ( list[i] === item ) {
  //     cb(true);
  //     break;
  //   } else {
  //     cb(false);
  //   }
  // }

  cb(list.includes(item));

}

contains('bannana', items, thing => console.log(thing));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  cb(array.filter( (item, index) => {
    array.indexOf(item) !== index;
  }));
}
items.push('Gum', 'Pencil');

items.filter( (item, index) => {
  console.log(items.indexOf(item) === index);
});

removeDuplicates(items, function (filtered) {
  console.log("This array is duplicate free:" + filtered)
});

/*
items.push('Gum', 'Pencil');
console.log(items);
const uniqueSet = new Set(items);
const backToArray = [...uniqueSet];

console.log(uniqueSet);
console.log(backToArray);

console.log(items.indexOf(items));

items.filter ((item, index) => {
  // console.log(item);
  // console.log(index);
  console.log(items[index] + " is index: " + items.indexOf(item));
  console.log(items.indexOf(item) === index);
});

*/