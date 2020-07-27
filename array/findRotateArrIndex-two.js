/**
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

示例 1:

输入: nums = [2,5,6,0,0,1,2], target = 0
输出: true
示例 2:

输入: nums = [2,5,6,0,0,1,2], target = 3
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  // 暴力解决
  // const index = nums.findIndex(item => item === target);
  // return !(index === -1);
  // 二分
  let left = 0,
   right = nums.length - 1;

 while (left <= right) {
   while (nums[left] === nums[left + 1]) {
     left++;
   }
   while (nums[right] === nums[right - 1]) {
     right--;
   }
   let mid = (left + right) >> 1;
   if (nums[mid] === target) {
     return true;
   }
   if (nums[mid] > nums[left]) {
     // 前有序
     if (nums[left] <= target && target < nums[mid]) {
       // 在前
       right = mid - 1;
     } else {
       left = mid + 1;
     }
   } else {
     if (nums[right] >= target && target > nums[mid]) {
       left = mid + 1;
     } else {
       right = mid - 1;
     }
   }
 }
 return false;
};


const nums = [2, 5, 6, 0, 0, 1, 2],
  target = 0;
console.log(search(nums, target));