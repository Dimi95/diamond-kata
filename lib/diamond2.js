const diamond2 = () => { return "A"}

const edge = (end) => {
    const beginHex = "A".charCodeAt(0)
    const endHex = end.charCodeAt(0)
    let result = []
    for (var i=beginHex; i<endHex+1; i++) {
        result.push(String.fromCharCode(i))
    }

    return result;
}
module.exports = {
    diamond: diamond2,
    edge
}