function sortedFrequency(arr, target) {
    const frequencyStart = findStartIndex(arr,target, 0)
    const frequencyEnd = findEndIndex(arr,target, 0)
    if (frequencyStart === -1 && frequencyEnd === -1) {
        console.log(-1)
        return -1
    }
    console.log(frequencyEnd - frequencyStart + 1)
    return frequencyEnd - frequencyStart + 1


}

function findStartIndex(arr, target, finalIndex) {

    // find midpoint
    const midPoint = Math.floor(arr.length / 2)
    const midValue = arr[midPoint]
    finalIndex = finalIndex + midPoint

    if (midValue === target) {
        // Found possible start
        if (arr[midPoint - 1] < target || arr[midPoint - 1] === undefined) {
            // Found start index
            return finalIndex
        } else {
            const newArr = arr.slice(0, midPoint)
            return findStartIndex(newArr, target, finalIndex - midPoint)
        }

    }

    if (midValue < target) {
        if (arr.length === 1) {
            return -1
        } else {
            const newArr = arr.slice(midPoint, arr.length)
            return findStartIndex(newArr, target, finalIndex)
        }

    }

    if (midValue > target) {
        const newArr = arr.slice(0, midPoint)
        return findStartIndex(newArr, target, finalIndex - midPoint)
    }

    if (!arr.length || arr.length === 1) {
        return -1
    }


}

function findEndIndex(arr, target, finalIndex) {

    // find midpoint
    const midPoint = Math.floor(arr.length / 2)
    const midValue = arr[midPoint]
    finalIndex = finalIndex + midPoint
    if (midValue === target) {
        // Found possible start
        if (arr[midPoint + 1] > target || arr[midPoint + 1] === undefined) {
            // Found end index
            return finalIndex
        } else {
            const newArr = arr.slice(midPoint, arr.length)
            return findEndIndex(newArr, target, finalIndex)
        }

    }

    if (midValue < target) {
        if (arr.length === 1) {
            return -1
        } else {
            const newArr = arr.slice(midPoint, arr.length)
            return findEndIndex(newArr, target, finalIndex)
        }

    }

    if (midValue > target) {
        const newArr = arr.slice(0, midPoint)
        return findEndIndex(newArr, target, finalIndex - midPoint)
    }

    if (!arr.length || arr.length === 1) {
        return -1
    }


}

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1