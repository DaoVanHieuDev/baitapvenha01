// bài tập  5: Cho một mảng số nguyên nums, viết một hàm tìm và
// trả về tổng của mảng con (subarray) có tổng lớn nhất.

export function maxSubArray(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let maxSum = nums[0]; // Tổng lớn nhất đã tìm thấy
  let currentSum = nums[0]; // Tổng tại vị trí hiện tại

  // Duyệt qua từng phần tử của mảng, bắt đầu từ phần tử thứ 1
  for (let i = 1; i < nums.length; i++) {
    // Tại mỗi vị trí, chọn giữa việc bắt đầu một dãy con mới hoặc mở rộng dãy con hiện tại
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum); // Cập nhật tổng lớn nhất
  }

  return maxSum;
}
