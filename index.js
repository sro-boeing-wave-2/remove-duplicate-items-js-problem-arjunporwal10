/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
    var len = items.length;
    var mySet = new Set();
    for (var i = 0; i<len; i++)
    {
        mySet.add(items[i]);
    }
    var myArr = Array.from(mySet);
    return myArr;
};

module.exports = removeDuplicateItems;
