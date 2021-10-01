//#1
function verNumero (numero) {
    if (numero >= 0) {
        console.log("O valor número é um Número positivo");
    }
    else {
        console.log("O valor número é um Número negativo");
    }
}
verNumero(1)

//#2
function maiorMenor (valorA, valorB, valorC) {
    if ((valorA + valorC) > valorB) {
        console.log(valorA + " + " + valorC + " = " + (valorA += valorB));
    }
    else {
        console.log((valorA + valorC) + " = " + valorB);
    }
}
maiorMenor(1, 5, 3)

//#3
var data = new Date();
var horario = data.getHours();

if (horario > 4 && horario < 13) {
    console.log("Bom Dia!");
}
else if (horario > 12 && horario < 18) {
    console.log("Boa Tarde");
}
else if (horario > 17 && horario < 5) {
    console.log("Boa Noite");
}
else if (horario === undefined) {
    console.log("Valor Inválido!");
}