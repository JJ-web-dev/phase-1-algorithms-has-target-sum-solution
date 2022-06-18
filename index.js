  // function hasTargetSum(array, target) {
  //   const seenNumbers = {};
  //   for (let i = 0; i < array.length; i++){
  //    const complement = target - array[i];
  //    if(seenNumbers[complement]) return true;
     
  //    seenNumbers[array[i]] = true;
  //    console.log(seenNumbers)
      
  //   }
  //   return false
  // }

  function hasTargetSum(array, target) {
    const seenNumbers = {};

    for (const number of array){
     const complement = target - number;
     if(complement in seenNumbers) return true;
     
     seenNumbers[number] = true;
     console.log(seenNumbers)
      
    }
    return false
  }


/* 
  Write the Big O time complexity of your function here
  Runtime:O(n)
  Space:O(n)
*/

/* 
hasTargetSum([1,2,3,4], 6)
seeNumbers = {
  1: true,
  2: true,
  3: true
}
  Add your pseudocode here
  create an object to keep track of numbers we've already seen
  iterate through each number in the array
  for the current num, identify a complement that adds to the target (co,p = target - num)
  check if any key on our object is the complement
  if so, return true
  otherwise, add that number to the object
*/

/*
  Add written explanation of your solution here
  We created an empty object to store seen numbers. We looped through each number in the array and subtracted 
  each number from the target and stored the values in a variable complement. We then compared complement to the
  obejct keys. if the complement number was in the object the function returned true, otherwise it returned false   
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
