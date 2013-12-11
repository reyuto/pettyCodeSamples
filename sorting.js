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

/**
 * Quicksort Algorithm O(>= nlogn)
 */
function Quicksort(list) {
    var len = list.length; 
    var pivot = list[0];
    var count = 0;
    var less = [];
    var greater = [];
    var equal = [];

    if (len > 1) {
        while (count < len) {
            var elem = list[count++];
            switch (compare(pivot, elem)) {
                case "less":
                    less.push(elem);
                    break;
                case "equal":
                    equal.push(elem);
                    break;
                case "more":
                    greater.push(elem);
                    break;
            }
        }
        less = Quicksort(less);
        greater = Quicksort(greater);
        list = less.concat(equal).concat(greater);
    }

    return list;

    function compare(pivot, elem) {
        return ((pivot === elem) ? 'equal' : ((pivot < elem) ? 'more' : 'less'));
    }
}