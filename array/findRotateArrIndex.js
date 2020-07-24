/**
 * 33. 搜索旋转排序数组
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
 */

//  /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function (nums, target) {
//   const maxIndex = nums.findIndex(item => item === Math.max(...nums));  //  思路基本正确，看了题解这个太low了
//   if(target> nums[maxIndex] || target< nums[maxIndex+1]){
//     return -1;
//   }else if(target >= nums[0] ||  maxIndex=== nums.length-1){  // 假如最大值是最后一个值，那么就按照一次的正常二分查找
//     let left = 0, right = maxIndex;
//     while(left < right){
//       let mid = (left+right) >> 1;
//       if(nums[mid] >= target){
//         right = mid;
//       }else{
//         left = mid +1;
//       }
//     }
//     return nums[left] === target? left : -1;
//   }else{
//     let left = maxIndex+1, right = nums.length;
//     while(left < right){
//       let mid = (left+right) >> 1;
//       if(nums[mid] > target){
//         right = mid;
//       }else if(nums[mid] < target){
//         left = mid +1;
//       }else{
//         return mid;
//       }}
//     if(nums.length<2 && nums[0]=== target){
//       return 0;
//     }else{
//       return nums[left] === target? left : -1;
//     } 
//   }
// };


 /**
  * 看完题解再写一遍
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left=0; right=nums.length-1;
  while(left <= right){  //这里要考虑到最后一个元素的情况，因此要等于
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {return mid;};
    if(nums[mid] >= nums[left]){ 
      if(nums[left]<= target && target < nums[mid]){  //  普通二分查找
        right = mid-1;
      }else{
        left = mid+1;
      }
    }else{
      if(nums[right] >= target && target > nums[mid]){
        left = mid+1;
      }else{
        right = mid-1;
      }
    }
  }
  return -1;
}




const nums=[1,2], target=2;
// const nums=[3, 1], target=3;

const index = search(nums, target)
console.log(index);