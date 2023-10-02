// bài tập 3: Một cụm từ được coi là palindrome nếu sau khi chuyển tất cả các chữ hoa thành chữ thường và loại
// bỏ tất cả các ký tự không chữ và không phải chữ số, cụm từ đó đọc từ trái sang phải và từ phải sang
// trái giống nhau. Các ký tự chữ và chữ số được coi là chữ và số.
// Cho một chuỗi đầu vào s, viết một hàm kiểm tra tính hợp lệ là palindrome trả về true nếu nó là một
// palindrome, ngược lại trả về false.

export const isPalindrome = (s: string): boolean => {
  // Chuyển đổi chuỗi thành chữ thường và loại bỏ ký tự không phải chữ và không phải số
  const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // So sánh chuỗi ban đầu với chuỗi đã chuyển đổi theo thứ tự đảo ngược
  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
};
