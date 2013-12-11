/**
 * Insertion Sort Algorithm O(n^2)
 */
function insertionSort(items, length, fnCompare) {
    var sL = Array.prototype.slice.call(items, 0);
    for (var i=1, n=length; i < n; i++) {
        var j=i;
        compare = fnCompare || compare;
        while (j>0 && compare(sL, j)) {
            swap(sL, j);
            j = j - 1;
        }
    }
    
    return sL;

    /**
     * @inner
     */
    function compare(list, index) {
        return (list[index] < list[index-1]);
    }

    /**
     * @inner
     */
    function swap(list, index) {
        var temp = list[index];
        list[index] = list[index - 1];
        list[index - 1] = temp;
    }
}