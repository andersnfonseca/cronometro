'use strict'

var horas = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000; 
var cronometro; 

function desativarStart() {
    document.getElementById("play").innerHTML = "<button id='play' onclick='start();' enabled = 'false'>Iniciar</button>"
}

function start() {
    cronometro = setInterval(() => { timer(); }, tempo);
    // desativarStart();
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
    location.reload();
    
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