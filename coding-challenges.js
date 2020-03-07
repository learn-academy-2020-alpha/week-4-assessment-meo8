// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]

// VERSION 1.0
// found the solution using sort, but not quite sure how it actually shuffles
// is it similar to sort's compare function – function(a,b) {a-b} for numbered strings?

// Math.random generates a number between 0 and 0.9999
// that number is then subtracted by 0.5, but how is that change the indices of the array?
// if you know, please help explain
const removeAndShuffleV1 = arr => {
  arr.shift()
  return arr.sort(() => Math.random() - 0.5);
}

console.log(removeAndShuffleV1(collections))

//VERSION 2.0
// shuffle using a for loop
const removeAndShuffleV2 = arr => {
  // removes the first element
  arr.shift();
  // loops through array, but starting from the last index
  for (let i = arr.length - 1; i > 0; i--) {
    // stores a random number between 0 and the variable i as declared above
    const j = Math.floor(Math.random() * i);
    // temp variable stores the value of the current element's value
    const temp = arr[i];
    // changes/switches the value of the current element
    // to the value of the random number generated above
    arr[i] = arr[j];
    // changes the value of arr[j] to temp's value
    arr[j] = temp;
  }

  return arr;
}

console.log(removeAndShuffleV2(collections))
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]





// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


const sumCubed = arr => {
  // (2 * 2 * 2) + (3 * 3 * 3) + (4 * 4 * 4) = 99
  // 8 + 27 + 64 = 99
  // maps thru and cubed each element
  // used reduce to accumulate elements
  // must set intial value to 0 or it will run incorrectly
  return arr.reduce((acc, val) => acc + (val ** 3), 0);
  // initial value = 0
  // intiVal + (2**3) = 8
  // 8 becomes the accumulator (acc)
  // acc + (3**3) = 35
  // 35 becomes the acc
  // acc + (4**3) = 99
}

console.log(sumCubed(cubeAndSum1));
console.log(sumCubed(cubeAndSum2));

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const minMax = arr => {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax(nums1));
console.log(minMax(nums2));



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.
var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


// VERSION 1.0
const coolLettersV1 = str => {
  // converts string to array
  let newStr = str.split("");
  // loops through array toUpperCase in odd indexes
  for (let i = 1; i < newStr.length; i += 2) {
    newStr[i] = newStr[i].toUpperCase();
  }
  // join array back into a single string
  return newStr.join("");
}


// VERSION 2.0
const coolLettersV2 = str => {
  // split string into an array of letters
  // map through letter with the value and index as arguments
  // use ternary to test if index is an odd num
    // if yes, toUpperCase that letter
    // if not, return normally
  return str.split("")
  .map((char, i) => i % 2 !== 0 ? char.toUpperCase() : char)
  .join("");
}





// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]

// VERSION 1.0 USING A FOR LOOP
const noDupsV1 = (arr1, arr2) => {
  // does arr2 includes a num from arr1?
  let newArr = [];
  let tempArr = [...arr1,...arr2];

  for (let i = 0; i < tempArr.length; i++) {
    if (newArr.indexOf(tempArr[i]) === -1) {
      newArr.push(tempArr[i]);
    }
  }

  return newArr;
}

// VERSION 2.0 USING FILTER METHOD
const noDupsV2 = (arr1, arr2) => {
  let newArr = [];
  let tempArr = [...arr1,...arr2];

  // Just another way of writing the exact same thing as line 154
  // tempArr.filter(num => {
  //   if (newArr.indexOf(num) === -1) {
  //     newArr.push(num);
  //   }
  // });

  return newArr = tempArr.filter(num => newArr.indexOf(num) === -1);
}

// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
// console.log(noDupsV1(arr1, arr2))
console.log(noDupsV2(arr1, arr2))
