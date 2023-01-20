let input = document.querySelector(".input-valor")
var primeiravariavel = 0;
var tipodesoma = 0;
let calculadora = document.querySelector('.calculadora')
let botao = document.querySelector('.botao')
var corescolhida = 0;
function cor() {
    if (corescolhida === 0) {
        calculadora.style.backgroundColor = "red"
        botao.style.backgroundColor = "#ccc"
        corescolhida = 1;
    } else if (corescolhida === 1) {
        calculadora.style.backgroundColor = "green"
        botao.style.backgroundColor = "blue"
        corescolhida = 2;
    } else if (corescolhida === 2) {
        calculadora.style.backgroundColor = "black"
        botao.style.backgroundColor = "red"
        corescolhida = 0;
    }
}
function multiplicar() {
    primeiravariavel = input.value
    input.value = ""
    tipodesoma = 1;
}
function dividir() {
    primeiravariavel = input.value
    input.value = ""
    tipodesoma = 2;
}
function mais() {
    primeiravariavel = input.value
    input.value = ""
    tipodesoma = 3;
}
function menos() {
    primeiravariavel = input.value
    input.value = ""
    tipodesoma = 4;
}

function resultado() {
    if (tipodesoma == 1) {
        let resultado = primeiravariavel * +input.value
        input.value = resultado
    } else if (tipodesoma == 2) {
        let resultado = +primeiravariavel / +input.value
        input.value = resultado
    } else if (tipodesoma == 3) {
        let resultado = +primeiravariavel + +input.value
        input.value = resultado
    } else if (tipodesoma == 4) {
        let resultado = +primeiravariavel - +input.value
        input.value = resultado
    }
}
function limpartudo() {
    tipodesoma = 0;
    primeiravariavel = "";
    input.value = "";
}
function limpar() {
    input.value = ""
}
function nove() {
    input.value = input.value + "9"
}
function oito() {
    input.value = input.value + "8"
}
function sete() {
    input.value = input.value + "7"
}
function seis() {
    input.value = input.value + "6"
}
function cinco() {
    input.value = input.value + "5"
}
function quatro() {
    input.value = input.value + "4"
}
function tres() {
    input.value = input.value + "3"
}
function dois() {
    input.value = input.value + "2"
}
function um() {
    input.value = input.value + "1"
}
function virgula() {
    input.value = input.value + ","
}