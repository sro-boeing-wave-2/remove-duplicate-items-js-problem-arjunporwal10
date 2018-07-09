/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const len = items.length;
  const mySet = new Set();
  for (let i = 0; i < len; i += 1) {
    mySet.add(items[i]);
  }
  const myArr = Array.from(mySet);
  return myArr;
};

module.exports = removeDuplicateItems;
