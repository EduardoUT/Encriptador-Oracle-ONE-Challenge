
/** Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras
Entrada: mensajeEntrada 
Salida: menternsaije 

Entrada: este mensajeEntrada sera encriptado
Salida: enterstenter menternsaijenter senterrai enterncrimesptaidober
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var inputUno = document.querySelector("#input-texto");
var inputDos = document.querySelector("#msg");
inputUno.focus();



function desencriptarMensaje() {
    var mensaje = document.querySelector("#input-texto").value;
    var decript = "";

    decript= mensaje.replace(/ai/g, letras[0]).replace(/enter/g, letras[1]).
    replace(/imes/g, letras[2]).replace(/ober/g, letras[3]).replace(/ufat/g, letras[4]);
    
        
    console.log("Desencriptado: " + decript);
    document.getElementById("msg").value = decript;

    limpiarCampoUno();

}

function copiarMensaje() {
    var copiarTexto = document.querySelector("#msg");
    copiarTexto.select();
    document.execCommand("copy");
    alert("Texto copiado en el portapapeles.")
}

function limpiarCampoUno() {
    inputUno.value = "";
    inputUno.focus();
}

document.querySelector("#btn-copy").addEventListener("click", copiarMensaje);
//console.log(document.getElementById("msg"));








