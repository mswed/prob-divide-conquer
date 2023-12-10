function countZeroes(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let zeroStart = 0;
    let zeroEnd = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let midPoint = Math.floor((leftIndex + rightIndex) / 2)
        let midValue = arr[midPoint]
        if (midValue === 1) {
            // We did not find the target
            // We've reached the end of our array, and did not find anything
            if (midPoint === arr.length - 1) {
                return 0
            }

            // Move the left to the mid-point
            leftIndex = midPoint + 1;
        } else if (midValue === 0) {
            // We found a target move the right to the mid-point
            rightIndex = midPoint - 1;
            // Mark this as the start of the sequence
            zeroStart = midPoint

        }

    }
    // console.log('Start is', zeroStart, 'end is ', zeroEnd)
    return (zeroEnd - zeroStart + 1)

}

//     L                 M                    R
//                          L        M        R
//                          L  M  R
//                          L/R
// arr = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
// countZeroes(arr)
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

// module.exports = countZeroes