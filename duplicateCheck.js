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

const numbers = [];
for (let i = 0; i < 40000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite;

suite
  .add('duplicates test', function() {
    nestedLoopDuplicateCheck(numbers);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds`));
  })
  .run();