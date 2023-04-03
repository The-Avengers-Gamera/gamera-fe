/**
 * Generate sleep time to mock api waiting time
 * @param {number} time time in millisecond, default 1000ms
 * @returns {Promise} solved promise
 */
const sleep = async (time = 1000) =>
  new Promise((_) => {
    setTimeout(_, time);
  });

export default sleep;
