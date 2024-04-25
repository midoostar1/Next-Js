// In javascript function declarations are hoisted to the top of the scope in which they are defined
  
// the square function can be called at the top

console.log(square(5))

function square(num) {
    return num * num;
  }

  //NOTE
  //function expressions are not hoisted to the top of the scope in which they are defined  


  //trying to call cube throws an error
  //console.log(cube(5))
  const cube = function(num) {
    return num * num * num;
  }
  