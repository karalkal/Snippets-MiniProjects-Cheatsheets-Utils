function displayItemCount(item, count) {
    let result = count == 1 ?
        `I have ${count} ${item}.` : `I have ${count} ${item}s.`
    return result
}


function displayItemCount2(item, count) {
    let result = `I have ${count} ${item}`

    result += count == 1 ?
        "." : "s."
    return result
}

console.log(displayItemCount("beer", 8))
console.log(displayItemCount("beer", 1))
console.log(displayItemCount("beer", 0))

console.log("-----------------")

console.log(displayItemCount2("beer", 8))
console.log(displayItemCount2("beer", 1))
console.log(displayItemCount2("beer", 0))

