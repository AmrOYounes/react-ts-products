/**
 *
 * @param {string} txt - The input text to be sliced.
 * @param {number} [maxLength=50] - The maximum length before truncation.
 * @returns The sliced text, with an ellipsis (...) appended if truncated.
 */
export const textSlicer = (txt: string, maxLength: number = 50) => {
  if (txt.length >= maxLength) {
    return `${txt.slice(0, maxLength)}...`;
  }
  return txt;
};
