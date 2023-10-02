

export const isValid = (s: string): boolean => {
  const stack: string[] = []; 

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char); 
    } else {

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

  return stack.length === 0;
};
