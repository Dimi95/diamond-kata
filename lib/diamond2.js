const diamond2 = () => { return "A" }

const edge = (end) => {                 //Warum fehlercode dass edge keine function? 
    const beginHex = "A".charCodeAt(0)
    const endHex = end.charCodeAt(0)
    let result = []
    for (var i = beginHex; i < endHex + 1; i++) {
        result.push(String.fromCharCode(i))
        function funktion(character) {         // let oder var ? Was speichert man in let oder var rein
            let aussenstrich = "-";
            let innenstrich = "-";
            var endeanzahl = character; //C
            var anfang = 65; //A
            var unterschied = endeanzahl - anfang;

            for (var i = 1; i < unterschied; i++) {
                aussenstrich = aussenstrich + "-";

            }
            // Hier möchte ich die beiden Strings verbinden
            let result = aussenstrich + character + innenstrich + character + aussenstrich;
            // Ist das mit gespiegelt gemeint? 
        }

        return result;
    }
    module.exports = {
        diamond: diamond2,
        edge
    }
}