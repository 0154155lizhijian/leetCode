/**
 * 回文
 * @param {string} x 
 */

var isPalindrome = function(x) {
  let arr = [...`${x}`];
  for(let i=0; i<arr.length/2; i++){
      if(arr[i] !== arr[arr.length-i-1]){
          return false;
      }
  }
  return true;
};


isPalindrome(12321)