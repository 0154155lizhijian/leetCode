/**
 * 55. 跳跃游戏
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

示例 1:

输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
示例 2:

输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let resetJump=0;  // 初始能力
  let resultFlag = true;  // 先假设他可以到
  for (let i = 0; i < nums.length-1; i++) {  // 这里减一是因为最后一步不用判断了，只要在他前面一步还有能力即可
    resetJump = Math.max(nums[i], resetJump); // 自身和剩余能力的最大值
    resetJump--; // 每走一步能力会减一
    if (resetJump < 0) { // 到某一步能力为0了那么便不能跳了
      resultFlag=false;
      break;  // get到了就跳出不再循环
    }
  }
  return resultFlag;
};


const nums = [2,3,1,1,4];

canJump(nums)