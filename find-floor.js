function findFloor(arr, target) {
        // Initialize search window
        let start = 0
        let end = arr.length - 1

        while (start <= end) {
            // Find midpoint
            let mid = Math.floor((start + end) / 2)
            if (arr[mid] === target) {
                // We found our target
                console.log('Found target at', mid)
                return arr[mid]
            }

            if (arr[mid] > target) {
                // Move window to the right
                end = mid - 1
            } else if (arr[mid] < target) {
                // Move window to the left
                if (arr[end] < target) {
                    console.log('Found target at', mid)
                    return arr[end]
            }
                if (arr[end] > target) {
                    let distance = end - start
                    // console.log('end minus start', end - start)
                    if ((end - start) === 1) {
                        // we have only two numbers to check
                        return arr[mid]
                    } else {
                        start = mid
                    }

                }


        }

    }
    return -1
}
