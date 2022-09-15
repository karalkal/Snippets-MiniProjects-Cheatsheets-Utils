let result = ""

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        result += "&   "
    }
    result += "\n"

    for (let k = 0; k < 5; k++) {
        result += "  &"
    }
    result += "\n"

}
console.log(result)
