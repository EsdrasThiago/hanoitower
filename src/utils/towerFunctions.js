const lowestCircleNumber = (tower) => {
    const mapTowers = tower.map((e) => e.size)
    const lowestCircleNumber = Math.min(...mapTowers)
    const findLowest = tower.find((e) => e.size === lowestCircleNumber)
    const reverseFilter = tower.filter((e) => e !== findLowest)
    return { reverse: reverseFilter, lowest: findLowest }
}

const arrayLimiter = (maxLength, array) => {
    let limitedArray = []
    for (let i = 0; i < maxLength; i++) {
        limitedArray.push(array[i])
    }
    return limitedArray
}

export default { arrayLimiter, lowestCircleNumber }