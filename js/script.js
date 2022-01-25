
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

var letras = ["a", "e", "i", "o", "u"];
var codigo = ["ai", "enter", "imes", "ober", "ufat"];
var punteroUno = document.getElementById("input-texto");
var punteroDos = document.getElementById("msg");
punteroUno.focus();

function encriptarMensaje() {
    /**
     * Primero obtenemos el contenido del input text, con document.getElementById.
     */

    var mensajeEntrada = document.getElementById("input-texto").value;
    //console.log(mensajeEntrada);
    var mensajeEncriptado = "";
    /**
     * Para comprobar si es un mensajeEntrada encriptado:
     * else {
     *       for (var k = 0; k < codigo.length; k++){
     *          if (mensajeEntrada [i] == codigo[j]) {
     *              palabra = mensajeEntrada[k].replace("ai", "a");
     *              mensajeEncriptado += palabra;
     *          }
     *      }
     * }
     * 
     * O bien, agregar todas las palabras en un solo arreglo de letras
     * y comprobarlas en un solo recorrido, solo manteniendo un control en los if
     */
    for (var i = 0; i < mensajeEntrada.length; i++) {
        if (mensajeEntrada[i] == letras[0]) {
            mensajeEncriptado += mensajeEntrada[i].replace(letras[0], codigo[0]);

        } else if (mensajeEntrada[i] == letras[1]) {

            mensajeEncriptado += mensajeEntrada[i].replace(letras[1], codigo[1]);

        } else if (mensajeEntrada[i] == letras[2]) {

            mensajeEncriptado += mensajeEntrada[i].replace(letras[2], codigo[2]);

        } else if (mensajeEntrada[i] == letras[3]) {

            mensajeEncriptado += mensajeEntrada[i].replace(letras[3], codigo[3]);

        } else if (mensajeEntrada[i] == letras[4]) {

            mensajeEncriptado += mensajeEntrada[i].replace(letras[4], codigo[4]);

        } else {
            mensajeEncriptado += mensajeEntrada[i];
        }
    }


    document.getElementById("msg").value = mensajeEncriptado;
    limpiarCampoUno();
}

function desencriptarMensaje() {
    var mensaje = document.getElementById("input-texto").value;
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
    punteroUno.value = "";
    punteroUno.focus();
}

function limpiarCampoDos() {
    punteroDos.value = "";
}

document.querySelector("#btn-copy").addEventListener("click", copiarMensaje);
//console.log(document.getElementById("msg"));








