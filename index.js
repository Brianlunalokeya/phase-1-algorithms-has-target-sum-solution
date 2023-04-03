function hasTargetSum(array, target) {
    for (let i = 0; i < array.length; i++) { 
      const complement = target - array[i];
      for (let j = i + 1; j < array.length; j++) { 
        if (array[j] === complement) {
          return true;
        }
      }
    }
    return false;
  }
  
//Write the Big O time complexity of your function here
//The time complexity of this function is O(n^2) because there is a nested loop 
//that iterates through the array twice.

/*
Add your pseudocode here
*/
//Iterate through the array and for each element i, calculate the complement of target and i.
//Iterate through the array again, starting at j = i + 1, and check if array[j] equals complement.
//If a match is found, return true.
//If no match is found, return false after all iterations are complete.//
/*
Add written explanation of your solution here
*/
//The function takes an array and a target integer as arguments. It then iterates through the array and for each element i, calculates the complement of target and i. It then iterates through the array again, starting at j = i + 1, and checks if array[j] equals complement. If a match is found, the function returns true. If no match is found after all iterations are complete, the function returns false. This function has a time complexity of O(n^2) because there is a nested loop that iterates through the array twice.
// You can run `node index.js` to view these console logs
  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([4], 4));
  }
module.exports = hasTargetSum;
