const Benchmark = require('benchmark');

function nestedLoopDuplicateCheck(arr) {
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

function optimizedDuplicates(arr) {
  // create empty object map
  const map = {};

  // else, increment key/value pair by 1
  
  // loop over array
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    
    // if array[i] not in map, create new key/value pair on map = 1
    if (map[value] === undefined) {
      map[value] = 1;
    } else {
      map[value]++;
    }
  }
  
  // create variable for most appearing value
  let mostValue;
  
  // create variable for most appearing count
  let mostCount = 0;
  
  // loop over object keys/values
  for (const value in map) {
    // if value > current most appearing count, update "most" variables to match
    if (map[value] > mostCount) {
      mostCount = map[value];
      mostValue = value;
    }
  }
    
  // return most appearing value and count
  return `${mostValue} appeared ${mostCount} times.`;
}

const numbers = [];
for (let i = 0; i < 10000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite;

suite
  .add('nested loops duplicates test', function() {
    nestedLoopDuplicateCheck(numbers);
  })
  .add('object key duplicates test', function() {
    optimizedDuplicates(numbers);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds`));
  })
  .run();