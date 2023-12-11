function findRotatedIndex(arr, target) {
    // Find array rotation index
    const rotationIndex = rotationIndexSearch(arr)
    if (target > arr[rotationIndex] && target > arr[arr.length - 1]) {
        return binarySearch(arr, target, 0, rotationIndex)
    } else {
        return binarySearch(arr, target, rotationIndex, arr.length - 1)
    }
}

function rotationIndexSearch(arr) {
    // Initialize search window
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        // Find midpoint
        let mid = Math.floor((start + end) / 2)
        if (arr[mid - 1] > arr[mid]) {
            // We found the rotation index number
            return mid
        }

        if (arr[mid] > arr[end]) {
            // Move window to the right
            start = mid + 1
        } else if (arr[mid] > arr[start]) {
            // Move window to the left
            end = mid - 1
        }
    }

}

function binarySearch(arr, target, start, end) {
    // Initialize search window
    // let start = 0
    // let end = arr.length - 1

    while (start <= end) {
        // Find midpoint
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) {
            // We found our target
            console.log('Found target at', mid)
            return mid
        }

        if (arr[mid] > target) {
            // Move window to the right
            end = mid - 1
        } else if (arr[mid] < target) {
            // Move window to the left
            start = mid + 1
        }
    }

    return -1

}

// module.exports = findRotatedIndex


