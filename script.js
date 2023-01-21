let input = document.querySelector(".input-valor")
var primeiravariavel = 0;
var tipodesoma = 0;
let calculadora = document.querySelector('.calculadora')
let botao = document.querySelector('.botao')
var corescolhida = 0;
let nove2 = document.querySelector('.nove')
let oito2 = document.querySelector('.oito')
let sete2 = document.querySelector('.sete')
let seis2 = document.querySelector('.seis')
let cinco2 = document.querySelector('.cinco')
let quatro2 = document.querySelector('.quatro')
let tres2 = document.querySelector('.tres')
let dois2 = document.querySelector('.dois')
let um2 = document.querySelector('.um')
let zero2 = document.querySelector('.zero')
let ponto2 = document.querySelector('.ponto')
let cor2 = document.querySelector('.cor')
let multiplicar2 = document.querySelector('.multiplicar')
let dividir2 = document.querySelector('.dividir')
let somar2 = document.querySelector('.somar')
let menos2 = document.querySelector('.menos')


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
    cor2.style.border = "none";
    setTimeout('cor2.style.border = "2px solid rgb(169, 169, 169)"', 150)
}
function multiplicar() {
    primeiravariavel = input.value
    input.value = ""
    tipodesoma = 1;
    multiplicar2.style.border = "none";
    setTimeout('multiplicar2.style.border = "2px solid rgb(169, 169, 169)"', 150)
}
function dividir() {
    primeiravariavel = input.value
    input.value = ""
    tipodesoma = 2;
    dividir2.style.border = "none";
    setTimeout('dividir2.style.border = "2px solid rgb(169, 169, 169)"', 150)
}
function mais() {
    primeiravariavel = input.value
    input.value = ""
    tipodesoma = 3;
    mais2.style.border = "none";
    setTimeout('mais2.style.border = "2px solid rgb(169, 169, 169)"', 150)
}
function menos() {
    primeiravariavel = input.value
    input.value = ""
    tipodesoma = 4;
    menos2.style.border = "none";
    setTimeout('menos2.style.border = "2px solid rgb(169, 169, 169)"', 150)
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
        let resultado = primeiravariavel - input.value
        input.value = resultado
    }
    if (primeiravariavel !== "" && corescolhida !== 2) {
        document.querySelector(".resultado").style.backgroundColor = "green";
    } else if (primeiravariavel !== "" && corescolhida == 2) {
        document.querySelector(".resultado").style.backgroundColor = "yellow";
    }
}
function limpartudo() {
    tipodesoma = 0;
    primeiravariavel = "";
    input.value = "";
    if (corescolhida == 0) {
        document.querySelector(".resultado").style.backgroundColor = "black";
    } else if (corescolhida == 1) {
        document.querySelector(".resultado").style.backgroundColor = "red";
    } else if (corescolhida == 2) {
        document.querySelector(".resultado").style.backgroundColor = "green";
    }
}
function limpar() {
    input.value = ""
    if (corescolhida == 0) {
        document.querySelector(".resultado").style.backgroundColor = "black";
    } else if (corescolhida == 1) {
        document.querySelector(".resultado").style.backgroundColor = "red";
    } else if (corescolhida == 2) {
        document.querySelector(".resultado").style.backgroundColor = "green";
    }
}
function nove() {
    input.value = input.value + "9"
    nove2.style.border = "none";
    setTimeout('nove2.style.border = "2px solid rgb(169, 169, 169)"', 150)
}
function oito() {
    input.value = input.value + "8"
    oito2.style.border = "none";
    setTimeout('oito2.style.border = "2px solid rgb(169, 169, 169)"', 150)
}
function sete() {
    input.value = input.value + "7"
    sete2.style.border = "none";
    setTimeout('sete2.style.border = "2px solid rgb(169, 169, 169)"', 150)
}
function seis() {
    seis2.style.border = "none";
    setTimeout('seis2.style.border = "2px solid rgb(169, 169, 169)"', 150)
    input.value = input.value + "6"
}
function cinco() {
    cinco2.style.border = "none";
    setTimeout('cinco2.style.border = "2px solid rgb(169, 169, 169)"', 150)
    input.value = input.value + "5"
}
function quatro() {
    quatro2.style.border = "none";
    setTimeout('quatro2.style.border = "2px solid rgb(169, 169, 169)"', 150)
    input.value = input.value + "4"
}
function tres() {
    tres2.style.border = "none";
    setTimeout('tres2.style.border = "2px solid rgb(169, 169, 169)"', 150)
    input.value = input.value + "3"
}
function dois() {
    dois2.style.border = "none";
    setTimeout('dois2.style.border = "2px solid rgb(169, 169, 169)"', 150)
    input.value = input.value + "2"
}
function um() {
    um2.style.border = "none";
    setTimeout('um2.style.border = "2px solid rgb(169, 169, 169)"', 150)
    input.value = input.value + "1"
}
function zero() {
    zero2.style.border = "none";
    setTimeout('zero2.style.border = "2px solid rgb(169, 169, 169)"', 150)
    input.value = input.value + "0"
}
function ponto() {
    input.value = input.value + "."
}