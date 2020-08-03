/**
 * 46. 全排列
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]

 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let allPermutation=[];
  let track=[];
  const backtrack=(nums, track) => {
    if(nums.length === track.length){ // 路径长达nums,那就走完了，push到结果中
      allPermutation.push(JSON.parse(JSON.stringify(track))); // 这里一定要拷贝一个 因为track会变
      return;
    }
    nums.forEach((item) => {
      if (track.includes(item)) { // 路径里面已经存在了当前元素，那就不走了。
        return;
      }
      track.push(item); // 路径补充
      backtrack(nums, track); 
      track.pop()  //  返回上个节点继续遍历
    });
  }
  backtrack(nums, track);
  console.log('allPermutation', allPermutation);
  return allPermutation;
};


const nums = [1,2,3,4];

permute(nums);