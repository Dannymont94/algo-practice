// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, etc...

function fibonacci(num) {
  // early out if num is too small
  if (num <= 2) {
    return 1;
  }

  // create array to push to that will store values for adding
  let fibArr = [1, 1];

  // loop and push to fibArr
  for (let i = 2; i < num; i++) {
    fibArr.push(fibArr[i-1] + fibArr[i-2]);
  }

  // return last item in array
  return fibArr[fibArr.length-1];
}

console.log(fibonacci(6));