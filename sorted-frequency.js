function sortedFrequency(arr, target) {
    let startL = 0;
    let startR = arr.length - 1;
    let endL = 0;
    let endR = arr.length - 1;

    let frequencyStart = -1;
    let frequencyEnd = -1;

    while (startL !== startR - 1) {
        let midIndex = Math.floor((startL + startR) / 2)
        let midValue = arr[midIndex]

        if (midValue === target) {
            if (arr[midIndex - 1] < target) {
                // Found the starting point
                frequencyStart = midIndex
                break
            } else if (arr[midIndex - 1] === target) {
                // We only found a possible starting point. Search left
                startR = midIndex
            }

        }

        if (midValue < target) {
            // We need to look at larger numbers
            startL = midIndex
        }

        if (midValue > target) {
            // We need to look at smaller numbers
            startR = midIndex
        }
    }

    while (startL !== startR) {
        let midIndex = Math.floor((startL + startR) / 2)
        let midValue = arr[midIndex]

        if (midValue === target) {
            if (arr[midIndex + 1] > target) {
                // Found the end point
                frequencyEnd = midIndex
                break
            } else if (arr[midIndex + 1] === target) {
                // We only found a possible starting point. Search left
                startL = midIndex
            }

        }

        if (midValue < target) {
            // We need to look at larger numbers
            startL = midIndex
        }

        if (midValue > target) {
            // We need to look at smaller numbers
            startR = midIndex
        }
    }


    console.log('F START', frequencyStart)
    console.log('F END', frequencyEnd)
    // console.log('FREQUENCY', frequencyEnd - frequencyStart + 1)
}

//                  L      M     R
//                  L  M   R
//                     L M R
sortedFrequency([1,2,2,3,3,3,3],2)
// sortedFrequency([1,1,2,2,2,2,3],2)
sortedFrequency([1,1,2,2,2,2,3],3)

//                  L     M     R
//                 L/MR
sortedFrequency([1,1,2,2,2,2,3],0) // -1

// module.exports = sortedFrequency