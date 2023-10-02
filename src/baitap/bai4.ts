// bài tập 4: Cho hai chuỗi s và t, viết một hàm kiểm tra trả về true nếu t
// là một từ hoán vị của s và false trong trường hợp ngược lại.
// Một từ hoán vị là một từ hoặc cụm từ được tạo thành bằng cách sắp xếp lại các chữ cái của một từ
// hoặc cụm từ khác, thường là sử dụng tất cả các chữ cái gốc một lần duy nhất.

export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false; // Độ dài của chuỗi s và t phải giống nhau
  }

  // Tạo một đối tượng để lưu trữ số lần xuất hiện của từng ký tự trong chuỗi s
  const charCount: { [char: string]: number } = {};

  // Đếm số lần xuất hiện của từng ký tự trong chuỗi s
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Kiểm tra số lần xuất hiện của từng ký tự trong chuỗi t
  // Nếu có bất kỳ ký tự nào xuất hiện nhiều hơn trong t so với s, thì không phải là từ hoán vị
  for (const char of t) {
    if (!(char in charCount) || charCount[char] === 0) {
      return false; // Ký tự không tồn tại trong s hoặc đã sử dụng hết
    }
    charCount[char]--;
  }

  return true; // Nếu đã kiểm tra qua tất cả các ký tự và số lần xuất hiện giống nhau, t là từ hoán vị của s
};
