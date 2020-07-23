/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。
示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let Min = 0, Max = nums.length, leftTarget=0;
  // 二分法找出左边界
  while(Min < Max){
   let mid= (Min+Max) >> 1;
   if(nums[mid] >= target){
     Max = mid;
   }else if(nums[mid] < target){
     Min = mid +1;
   }
  }
  leftTarget = Min;

 // 检查出界情况
 if (leftTarget >= nums.length || nums[leftTarget] != target){
   return [-1 ,-1];
   }else{
   Min = leftTarget+1; // 以左边界的右边一个开始计算
   Max = nums.length;
  }
  // 二分法找出右边界
  while(Min < Max){
   let mid= (Min+Max) >> 1;
   if(nums[mid] <= target){
     Min = mid+1;
   }else if(nums[mid] > target){
     Max = mid;
   }
  }
  return[leftTarget, Max-1];
};

// const nums = [5,7,7,8,8,10], target = 8;

const nums = [1], target = 1;

searchRange(nums, target);



 