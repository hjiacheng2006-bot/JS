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
    // Funciones científicas
    let potencia = document.getElementById('potencia');
    let raiz = document.getElementById('raiz');
    let logaritmo = document.getElementById('logaritmo');
    let porcentaje = document.getElementById('porcentaje');
    let fraccion = document.getElementById('fraccion');
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
    // Eventos
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
    // Operaciones básicas
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
    potencia.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "^";
        resultado.textContent = "";
    };
    // Operaciones científicas
    porcentaje.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "%";
        resultado.textContent = "";
    };
    fraccion.onclick = function(e){
        resultado.textContent = resultado.textContent + "/";
    };
    raiz.onclick = function(e){
        operandoa = resultado.textContent;
        resultado.textContent = Math.sqrt(parseFloat(operandoa));
    };
    logaritmo.onclick = function(e){
        operandoa = resultado.textContent;
        resultado.textContent = Math.log10(parseFloat(operandoa));
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
    let resultadoFinal = 0;
    switch(operacion){
        case "+":
            resultadoFinal = parseFloat(operandoa) + parseFloat(operandob);
        break;

        case "-":
            resultadoFinal = parseFloat(operandoa) - parseFloat(operandob);
        break;

        case "*":
            resultadoFinal = parseFloat(operandoa) * parseFloat(operandob);
        break;

        case "/":
            resultadoFinal = parseFloat(operandoa) / parseFloat(operandob);
        break;

        case "^":
            resultadoFinal = Math.pow(parseFloat(operandoa), parseFloat(operandob));
        break;

        case "%":
            resultadoFinal = (parseFloat(operandoa) * parseFloat(operandob)) / 100;
        break;
    }
    resetear();
    resultado.textContent = resultadoFinal;
}