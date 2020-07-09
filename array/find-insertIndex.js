/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-insert-position
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


const nums = [1,3,5,6];


 /**
  * 强行分类讨论
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target === nums[0]) {
    return 0;
  } else {
    const index = nums.findIndex((n) => n === target);
    if (index > 0) {
      return index;
    } else if (target < nums[0]) {
      return 0;
    } else if( target> nums[nums.length-1]){
      return nums.length;
    }else {
      for (let i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
          return i;
        }
      }
    }
  }
};
searchInsert(nums, 3);

 /**
  * 简化操作
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return nums.concat(Infinity).findIndex(n => n >= target);
};
searchInsert(nums, 3);


 /**
  * >> 位操作符 比如 14 二级制 01110  那么14 >> 1 就是 0111 等于 7
  * 二分法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0 , right = nums.length-1;
  while (left<= right) {
    const mid = (left+ right) >> 1;
    if(nums[mid] === target) return mid;
    if(nums[mid]< target){
      left= mid+1
    }else{
      right= mid-1;
    }
  }
  return left;
};
searchInsert(nums, 2);

