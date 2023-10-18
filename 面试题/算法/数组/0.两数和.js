// [1,2,7] 8

// O(1)
// O(n)
// 有序数组，两数之和

const twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]; // 1 => 2 => 7
    let n = target - num; // 7 => 6 => 1

    if (num in obj) {
      // 1 // 2  // 7
      return [i, obj[num]]; //  [2, 0]
    } else {
      obj[n] = i; // {7: 0, 6: 1, }
    }
  }
};

const twoSumV2 = (nums, target) => {
  for(let i=0;i<nums.length;i++){
      for(let j=0;j<nums.length;j++){
          if(nums[i]+nums[j]===target && i!==j){
            return [i,j]
          }
      }
  }
}

// 有序数组，双指针
// [双指针，比对目标值移动指针]
const twoSumV3 = (nums, target) => {
  let left = 0
  let right = nums.length-1
  while(left<right) {
    const sum = nums[left] + nums[right]
    if (sum === target) {
      return [left, right]
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right++;
    }
  }
};
const target = twoSumV3([1, 2, 7], 8);
console.log(target)


// [1,2,3,4,5,5,6,]
// 