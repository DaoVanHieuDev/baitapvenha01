// // Array
// interface Student1 {
//   fullName: string;
//   age: number;
//   isMale: boolean;
// }

// const listStudent: Student1[] = [
//   { fullName: "hai anh", age: 12, isMale: true },
//   { fullName: "hai nam", age: 13, isMale: true },
//   { fullName: "hai thai", age: 14, isMale: true },
//   { fullName: "hai dao", age: 1, isMale: true },
//   { fullName: "hai hai", age: 16, isMale: true },
// ];

// const listNumber: number[] = [1, 2, 3, 4, 5];

// // Functions

// const add = (a: number, b: number) => {
//   return a + b;
// };

// nếu ko khai báo tự động hiểu cái mà mình returned

// import { twosum } from "./baitap/bai1";

// console.log(twosum([1, 2, 3, 4, 5], 9));

import { isValid } from "./baitap/bai2";

console.log(isValid("()[]{{[]}}"));
console.log(isValid("}}"));
console.log(isValid("{}()([{)}]"));

// import { isPalindrome } from "./baitap/bai3";

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));

// import { isAnagram } from "./baitap/bai4";

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "cat"));

// import { maxSubArray } from "./baitap/bai5";

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
// console.log(maxSubArray([1])); // Output: 1
// console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23
// console.log(maxSubArray([5, 4, -2, 4, 4, 6]));
