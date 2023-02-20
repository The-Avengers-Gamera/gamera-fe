/**
 * Generate sleep time to mock api waiting time
 * @param {number} time time in millisecond
 * @returns {Promise} solved promise
 */
const sleep = (time = 1) =>
  new Promise((_) => {
    setTimeout(_, time);
  });

export default sleep;
