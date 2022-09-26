let getal=Number(prompt("Geef een getal in:"));
let aantalLijnen=Number(prompt("Geef het aantal lijnen in"));
let resultaat="";
let i=1;
let teller=getal


for(teller;teller<=aantalLijnen;teller++){
    resultaat = (teller - 3) + (teller- 7) + "," + resultaat
    teller++

    }

console.log(resultaat.substring(0,resultaat.length-1));

