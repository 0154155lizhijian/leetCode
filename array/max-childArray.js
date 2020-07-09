/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
  * 先暂存一个临时的最大值，也就是加我或者不加我的最大值
  * 再把这个最大值和我自己做比较，取最大
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0], preSum = 0; 
  // for (let i = 0; i < nums.length; i++) {
  //   preSum = Math.max(nums[i],preSum+nums[i])
  //   maxSum = Math.max(maxSum,preSum)
  // }下面的竟让会更快
  nums.forEach(item => {
    preSum = Math.max(item,preSum+item)
    maxSum = Math.max(maxSum,preSum)
  });
  return maxSum;
};


