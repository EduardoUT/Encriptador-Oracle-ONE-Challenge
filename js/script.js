
/* Reglas de encriptación: 
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

function validarMensaje(textoEntrada) {
    var textoMinusculas = "";
    /**
     * ¿Qué es indexOf()?
     * Función que nos permite saber si existe un carácter en una posición, 
     * su valor de retorno es la posición en el índice.
     * Sintáxis:
     * cadena.indexOf(valorBusqueda [, indiceDesde])
     * */
    var textoValidado = ""; //Primera variable que solo recibirá las coincidencias con la variable filtroGeneral
    /**
     * En la variable filtroGeneral se incluyen todos los caracteres admitidos
     * Incluso si el usuario escribe una letra en mayúscula, esta función restringirá que se registre en el 
     * campo de texto, y más adelante con la función toLowerCase() se convertirá en minúscula.
     */
    //Al final dejé un espacio para validar también los espacios en blanco.
    var filtroGeneral = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTVWXYZ ";
    /**
     * Hice dos ciclos uno para recorrer el contenido de mi input text y otro para recorrer mi filtro
     */
    for (var i = 0; i < textoEntrada.length; i++) {
        for (var j = 0; j < filtroGeneral.length; j++) {
            //Si el contenido del índice en mi filtroGeneral coincide con el de mi input text lo irá agregando
            //Si no solo se ignora
            if (filtroGeneral[j] == textoEntrada[i]) {
                //Con el console, comprobamos que corresponda a la posición del filtroGeneral dando true
                //console.log(filtroGeneral[j] == textoEntrada[i]);
                textoValidado += textoEntrada[i];
            }
        }
    }

    textoMinusculas = textoValidado.toLowerCase(); //Función de JavaScript que permite transformar string en minúscula.   

    return textoMinusculas;
}



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








