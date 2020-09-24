function duplicateCheck(arr) {
  // create variable for most appearing value
  let mostValue = 0;

  // create variable for most appearing count
  let mostCount = 0;

  // loop over array (i)
  for (let i = 0; i < arr.length; i++) {
    // start a counter for number of occurrences
    let count = 0;

    // loop over array again (j)
    for (let j = 0; j < arr.length; j++) {
      // compare indexes
      if (arr[i] === arr[j]) {
        // if same, increase counter
        count++;
      }

    }    
    
    // if counter > current most appearing count, update "most" variables to match
    if (count > mostCount) {
      mostCount = count;
      mostValue = arr[i];
    }
  }
    
  // return most appearing value and count
  return `${mostValue} appeared ${mostCount} times.`;
}


const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];

console.log(duplicateCheck(numbers));