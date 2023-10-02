
export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }

  const charCount: { [char: string]: number } = {};
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of t) {
    if (!(char in charCount) || charCount[char] === 0) {
      return false;
    }
    charCount[char]--;
  }

  return true; 
};
