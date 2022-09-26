let eindGetal=Number(prompt("Geef een eindGetal in:"));
let fac=1;
let i=1;
let resultaat="";

for(i;i<=5;i++){
    fac=fac*i
    resultaat=resultaat+fac+","
}
console.log(resultaat.substring(0,resultaat.length-1));

