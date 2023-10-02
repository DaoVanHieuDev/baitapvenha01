
export const isPalindrome = (s: string): boolean => {
  const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
};
