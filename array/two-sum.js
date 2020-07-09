/**
 * 
  给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/two-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * 一版
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   for (let i = 0; i < nums.length; i++) {
     for (let j = i+1; j < nums.length; j++) {
       if(nums[i] + nums[j] === target ){
         return [i,j]
       }
     }
   }
};

/**
 * 二版 hashMap
 * @param {*} nums 
 * @param {*} target 
 */
var twoSum = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length-1; i++) {
    const curNum = nums[i];
    const targetNum = target - curNum;
    const targetIndex = hashMap[targetNum];
    if (targetIndex) {
      return [targetIndex, i];
    }
    hashMap[curNum] = i;
  }
};