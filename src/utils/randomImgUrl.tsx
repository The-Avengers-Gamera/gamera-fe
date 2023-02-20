/**
 * Generate random image url link
 * @param {number} width
 * @param {number} height
 * @returns {string} generated url
 */
const randomImgUrl = (width: number, height: number): string =>
  `https://spicsum.photos/${width}/${height}`;

export default randomImgUrl;
