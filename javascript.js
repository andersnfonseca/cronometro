'use strict'

var horas = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000; 
var cronometro; 

function desativarStar() {
    document.getElementById("play").innerHTML = "<button id='play' onclick='start()'; disabled = 'true'>Iniciar</button>"
}

function ativarStart() {
    document.getElementById("play").innerHTML = "<button id='play' onclick='start();'>Iniciar</button>"
}

function start() {
    cronometro = setInterval(() => { timer(); }, tempo);
    desativarStar();
}

function pause() {
    clearInterval(cronometro);
}

function stop() {
    clearInterval(cronometro);
    horas = 0; 
    minutos = 0;
    segundos = 0;

    document.getElementById("contador").innerText = "00:00:00";
    
}

function timer() {
    segundos++;

    if (segundos == 60) {
        segundos = 0
        minutos++
    
    if (minutos == 60) {
        minutos = 0;
        horas++
    }
}

var formato = (horas < 10 ? '0' + horas: horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);

document.getElementById("contador").innerText = formato;

return formato;      

}