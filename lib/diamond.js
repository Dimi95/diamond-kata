 //function (() => {
      //  funktionRest("H")}
    //}

    function funktionA(buchstabe) {
        var aussenstrich = "-";
        var innenstrich = "-";
        //char array[] = {"A", "B", "C", "D"};
        var endeanzahl = buchstabe; //C
        var anfang = 65; //A
        var unterschied = endeanzahl - anfang;


            for (var i = 1; i < unterschied; i++) {
                aussenstrich = aussenstrich + "-";
            }
            console.log(aussenstrich);
            console.log(array[0]);
            console.logln(aussenstrich);
        }


    function funktionRest(buchstabe) {
        if ("A" == buchstabe) {
            console.logln("A");
        } else {
            var aussenstrich = "-";
            var innenstrich = "-";
            var array = ["A","B", "C","D","E","F","G","H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                    "S", "T", "U", "V", "W", "X", "Y", "Z"];
            var endeanzahl = buchstabe; //D
            var anfang = 65; //A
            var unterschied = endeanzahl - anfang;
            var tmp = unterschied;

            //Hier fängt es an
            funktionA(buchstabe);
            for (var i = 1; i <= unterschied; i++) {
                aussenstrich = "";
                //tmp ist für die anzahl an außenstrichen zuständig
                tmp = tmp - 1;
                for (var j = 1; j <= tmp; j++) {
                    aussenstrich = aussenstrich + "-";
                }
                console.log(aussenstrich);
                console.log(array[i]);
                console.log(innenstrich);
                console.log(array[i]);
                console.logln(aussenstrich);
                innenstrich = innenstrich + "-" + "-";
            }

            //ab hier wirds gespiegelt
            for (var i = unterschied - 1; i >= 1; i--) {
                //tmp ist für die anzahl an außenstrichen zuständig
                tmp = tmp + 1;
                aussenstrich = "";
                innenstrich = "-";
                for (var j = 1; j <= tmp; j++) {
                    aussenstrich = aussenstrich + "-";
                }
                for (var j = i - 1; j >= 1; j--) {
                    innenstrich = innenstrich + "-" + "-";
                }

                console.log(aussenstrich);
                console.log(array[i]);
                console.log(innenstrich);
                console.log(array[i]);
                console.log(aussenstrich);
                //innenstrich = innenstrich + "-" + "-";
            }
            funktionA(buchstabe);
        }

    }