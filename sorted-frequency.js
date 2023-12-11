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
    console.log('Array is', arr)

    // find midpoint
    const midPoint = Math.floor(arr.length / 2)
    const midValue = arr[midPoint]
    console.log('Received index is', finalIndex)
    finalIndex = finalIndex + midPoint

    // search

    console.log('Midpoint is', midPoint)
    console.log('Final index is', finalIndex)
    // console.log('Mid Value is', midValue)
    if (midValue === target) {
        // Found possible start
        if (arr[midPoint - 1] < target || arr[midPoint - 1] === undefined) {
            // Found start index
            console.log('Start index is', midPoint)
            console.log('Found start at', finalIndex)
            return finalIndex
        } else {
            const newArr = arr.slice(0, midPoint)
            return findStartIndex(newArr, target, finalIndex - midPoint)
        }

    }

    if (midValue < target) {
        if (arr.length === 1) {
            console.log('START NOT FOUND')
            return -1
        } else {
            console.log('Going right')
            console.log(midPoint, arr.length)
            const newArr = arr.slice(midPoint, arr.length)
            return findStartIndex(newArr, target, finalIndex)
        }

    }

    if (midValue > target) {
        console.log('Going left')
        const newArr = arr.slice(0, midPoint)
        return findStartIndex(newArr, target, finalIndex - midPoint)
    }

    if (!arr.length || arr.length === 1) {
        console.log('START NOT FOUND')
        return -1
    }


}

function findEndIndex(arr, target, finalIndex) {
    console.log('Array is', arr)

    // find midpoint
    const midPoint = Math.floor(arr.length / 2)
    const midValue = arr[midPoint]
    console.log('Received index is', finalIndex)
    finalIndex = finalIndex + midPoint
    console.log('Midpoint is', midPoint)
    console.log('Final index is', finalIndex)
    console.log(midValue, '===', target)
    if (midValue === target) {
        console.log('Target matches mid value')
        // Found possible start
        if (arr[midPoint + 1] > target || arr[midPoint + 1] === undefined) {
            // Found end index
            console.log('End index is', midPoint)
            console.log('Found end at', finalIndex)
            return finalIndex
        } else {
            const newArr = arr.slice(midPoint, arr.length)
            return findEndIndex(newArr, target, finalIndex)
        }

    }

    if (midValue < target) {
        if (arr.length === 1) {
            console.log('END NOT FOUND')
            return -1
        } else {
            console.log('Going right')
            console.log(midPoint, arr.length)
            const newArr = arr.slice(midPoint, arr.length)
            return findEndIndex(newArr, target, finalIndex)
        }

    }

    if (midValue > target) {
        console.log('Going left')
        const newArr = arr.slice(0, midPoint)
        return findEndIndex(newArr, target, finalIndex - midPoint)
    }

    if (!arr.length || arr.length === 1) {
        // console.log('END NOT FOUND')
        return -1
    }


}

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1