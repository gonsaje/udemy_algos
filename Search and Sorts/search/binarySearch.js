// must use sorted arr

function binarySearch(arr, target) {
    let left = 0,
        right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        if (arr[mid] > target) right = mid - 1
    }
    return -1;
}

// O(log n) => worst/avg case => we half the input with each interation

// Best case = O(1);