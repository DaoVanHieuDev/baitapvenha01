
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
