//function declaration
function square(num) {
  return num * num;
}

console.log(square(5));

//function expression

const cube = function (num) {
  return num * num * num;
};

console.log(cube(5));

const factorial = function fac(num) {
  return num < 2 ? 1 : num * fac(num - 1);
};

console.log(factorial(5));

//Create a javascript function that maps functions to each element element of an array and then returns a new array and provide provide a cube function which will then transform each result and the array is cubed.
const map = function (func, arr) {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = func(arr[i]);
  }
  return result;
};

console.log(map(cube, [1, 2, 3, 4]));
