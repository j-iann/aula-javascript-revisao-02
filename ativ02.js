//#1
function revendedora (tipo) {
    switch (tipo) {
        case "hatch":
            console.log("Compra efetuada com sucesso");
            break;
        case "sedan" || "motocicleta" || "caminhonete":
            console.log("Tem certeza que não prefere este modelo?");
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
    }
}
//#2
function triangulo (a, b, c) {
    if (a == b && a == c) {
        console.log("Seu triângulo é equilátero.");
    }
    else if (a != b && a != c) {
        console.log("Seu triângulo é escaleno.");
    }
    else {
        console.log("Seu triângulo é isósceles.");
    }
}
triangulo(45, 87, 45)

//#3
function receber (numero) {
    if (numero >= 0) {
        console.log("O número é positivo.");
    }
    else {
        console.log("O número é negativo.");
    }
}