// bài tập 1: Cho một mảng số nguyên nums và một số nguyên target,
// viết một hàm trả về kết quả là một mảng chỉ số của hai số trong
// mảng nums sao cho tổng của chúng bằng target.

export const twosum = (listNumber: number[], target: number): number[] => {
  for (let i = 0; i < listNumber.length; i++) {
    for (let j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] + listNumber[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};
