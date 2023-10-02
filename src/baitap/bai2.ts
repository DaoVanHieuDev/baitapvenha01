// bài tâp 2: Cho một chuỗi s chỉ chứa các ký tự '(', ')', '{', '}', '[', ']',
// viết một hàm xác định xem chuỗi đầu vào s có hợp lệ hay không.
// Một chuỗi đầu vào s được coi là hợp lệ nếu:
// 1. Dấu mở ngoặc phải được đóng phải cùng một loại ngoặc.
// 2. Dấu mở ngoặc phải được đóng theo thứ tự chính xác.
// 3. Mỗi dấu đóng ngoặc phải có một dấu mở ngoặc tương ứng cùng loại.

export const isValid = (s: string): boolean => {
  const stack: string[] = []; // Sử dụng một mảng để theo dõi các dấu ngoặc mở

  // Duyệt qua từng ký tự trong chuỗi đầu vào
  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char); // Nếu là dấu mở ngoặc, đẩy nó vào mảng
    } else {
      // Nếu là dấu đóng ngoặc, kiểm tra xem mảng có phần tử không
      // và xem dấu đóng ngoặc có tương ứng với dấu mở ngoặc cùng loại không
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }

  // Kiểm tra xem mảng cuối cùng có rỗng không
  return stack.length === 0;
};
