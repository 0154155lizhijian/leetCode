/**
 * 
 *
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

/**
 * 一版
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangles = [];
  let sn = [1];
  for (let i = 0; i < numRows; i++) {
    let bn = [];
    bn[0] = 1;
    bn[i] = 1;
    for (let a = 1; a < i; a++) {
      bn[a] = sn[a - 1] + sn[a];
    }
    sn = bn;
    triangles.push(sn);
  }
  return triangles;
};

// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
// var generate = function (numRows) {
//   let triangles = [];
//   for (let i = 0; i < numRows; i++) {
//     let bn = [];
//     bn[0] = 1;;
//     bn[i] = 1; 
//     for (let a = 1; a < i; a++) {
//       bn[a] = triangles[i-1][a-1] + triangles[i-1][a];  // 不要去copy一个数组，本身就包含数组元素
//     }
//     triangles.push(bn);
//   }
//   return triangles;
// };

generate(5);
