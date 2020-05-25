const diamond2 = () => { return "A" }

const edge = (end) => {                 //Warum fehlercode dass edge keine function? 
    const beginHex = "A".charCodeAt(0)
    const endHex = end.charCodeAt(0)
    let result = []
    for (var i = beginHex; i < endHex + 1; i++) {
        result.push(line(String.fromCharCode(i)))
        function line(character) {         // let oder var ? Was speichert man in let oder var rein
            let aussenstrich = "-";
            let innenstrich = "-";
            var endeanzahl = character.charCodeAt(0); //C
            var anfang = 65; //A
            var unterschied = endeanzahl - anfang;
            
           
            // Hier möchte ich die beiden Strings verbinden
            return aussenstrich.repeat(unterschied) + character + innenstrich + character + aussenstrich.repeat(unterschied);
            // Ist das mit gespiegelt gemeint? 
            
        }

    }
    return result;
}
module.exports = {
    diamond: diamond2,
    edge
}