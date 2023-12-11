function findRotationCount(arr) {
    // Find array rotation index
    return rotationIndexSearch(arr)
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

        if (arr[mid] >= arr[end]) {
            // Move window to the right
            start = mid + 1
        } else if (arr[mid] >= arr[start]) {
            // Move window to the left
            end = mid - 1
        }
    }

    return 0

}

// module.exports = findRotationCount