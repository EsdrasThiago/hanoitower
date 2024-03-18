const findLowestCircle = (tower) => {
    const mapTowers = tower.map((e) => e.size)
    const lowestCircleNumber = Math.min(...mapTowers)
    const findLowest = tower.find((e) => e.size === lowestCircleNumber)
    const reverseFilter = tower.filter((e) => e !== findLowest)
    return {reverse: reverseFilter, lowest: findLowest}
}

export default findLowestCircle