let operandoa;
let operandob;
let operacion;

function init(){
    // Inicialización de variables
    let resultado = document.getElementById('resultado');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let cero = document.getElementById('cero');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let igual = document.getElementById('igual');
    let reset = document.getElementById('reset');
    // Eventos números
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    };
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    };
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    };
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    };
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    };
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    };
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    };
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    };
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    };
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    };
    // Eventos
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        resultado.textContent = "";
    };
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        resultado.textContent = "";
    };
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        resultado.textContent = "";
    };
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        resultado.textContent = "";
    };
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    };
    reset.onclick = function(e){
        resetear();
    };
}

function resetear(){

    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){

    let res = 0;

    switch(operacion){

        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
        break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
        break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
        break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }

    resetear();
    resultado.textContent = res;
}