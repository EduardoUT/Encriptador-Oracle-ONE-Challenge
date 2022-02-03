/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();

    var mensaje = document.querySelector("#input-texto");
    var valorMensaje = mensaje.value;
    var campoDos = document.querySelector("#msg");
    var decript = "";
    
    decript = valorMensaje.replace(/ai/g, letras[0]).replace(/enter/g, letras[1]).
    replace(/imes/g, letras[2]).replace(/ober/g, letras[3]).replace(/ufat/g, letras[4]);    
    //console.log(decript);
    campoDos.value = decript;

    limpiarCampoUno();

});

