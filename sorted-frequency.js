function sortedFrequency(arr, target) {

    let endL = 0;
    let endR = arr.length - 1;

    let frequencyStart = -1;
    let frequencyEnd = -1;

    let startL = 0;
    let startR = arr.length - 1;
    while (startL !== startR) {
        let midIndex = Math.ceil((startL + startR) / 2)
        let midValue = arr[midIndex]

        if (midValue === target) {
            if (arr[midIndex - 1] < target) {
                // Found the starting point
                frequencyStart = midIndex
                break
            } else if (arr[midIndex - 1] === target && midIndex - 1 === 0) {
                frequencyStart = midIndex - 1
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

    startL = 0;
    startR = arr.length - 1;
    while (startL !== startR) {
        let midIndex = Math.floor((startL + startR) / 2)
        let midValue = arr[midIndex]

        if (midValue === target) {
            if (arr[midIndex + 1] > target || arr[midIndex + 1] > arr.length - 1) {
                // Found the end point
                console.log('found end point at', midIndex)
                frequencyEnd = midIndex
                break
            } else if (arr[midIndex + 1] === target) {
                // We only found a possible starting point. Search left
                startL = midIndex
            }

        }

        if (midValue < target) {
            // We need to look at larger numbers
            startL = midIndex + 1
        }

        if (midValue > target) {
            // We need to look at smaller numbers
            startR = midIndex
        }
    }


    console.log('F START', frequencyStart)
    console.log('F END', frequencyEnd)
    if (frequencyStart === -1 && frequencyEnd === -1) {
        return -1
    }
    console.log(frequencyEnd - frequencyStart + 1)
    return frequencyEnd - frequencyStart + 1
}

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
//                  L     M      R
//                        L    M R
//                          L  M R
//                             L R
sortedFrequency([1,1,2,2,2,2,3],3) // 1
//                  L     M      R
//                  L  M  R
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
//
// //                  L      M     R
// //                         L M   R
// //                           L M R
// // sortedFrequency([1,1,2,2,2,2,3],2)
// //                  L      M     R
// //                         L M   R
// //                           L M R
// //                             L R
// sortedFrequency([1,1,2,2,2,2,3],3)
//
// //                  L     M     R
// //                 L/MR
// sortedFrequency([1,1,2,2,2,2,3],0) // -1
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)
// sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)
// // sortedFrequency([1,2,2,3,3,3,3],2)
//
// // module.exports = sortedFrequency