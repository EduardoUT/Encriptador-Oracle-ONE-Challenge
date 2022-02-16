var botonEncriptar = document.querySelector("#btn-encriptar");

//Creamos un evento asociandolo a una función anónima
botonEncriptar.addEventListener("click", function (event) {
    //Evitamos que el sitio web recargue
    event.preventDefault();
    //Primero seleccionamos el elemento input text, con document.querySelector(), lo asigno a la variable inputUno.
    var inputUno = document.querySelector("#input-texto");
    //Asignando el valor de inputUno a la variable valorInputUno
    var valorInputUno = inputUno.value;
    //Selecciono el segundo input donde pasaré al final el texto encriptado
    var inputDos = document.querySelector("#msg");
    var mensajeEncriptado = "";
    //Iterando en el input uno y evaluando coincidencias con if anidado
    for (var i = 0; i < valorInputUno.length; i++) {
        if (valorInputUno[i] == letras[0]) {
            mensajeEncriptado += valorInputUno[i].replace(letras[0], codigo[0]);

        } else if (valorInputUno[i] == letras[1]) {

            mensajeEncriptado += valorInputUno[i].replace(letras[1], codigo[1]);

        } else if (valorInputUno[i] == letras[2]) {

            mensajeEncriptado += valorInputUno[i].replace(letras[2], codigo[2]);

        } else if (valorInputUno[i] == letras[3]) {

            mensajeEncriptado += valorInputUno[i].replace(letras[3], codigo[3]);

        } else if (valorInputUno[i] == letras[4]) {

            mensajeEncriptado += valorInputUno[i].replace(letras[4], codigo[4]);

        } else {
            mensajeEncriptado += valorInputUno[i];
        }
    }

    //Asignando el mensaje final a mi input dos, este será visible al momento de dar click en Encriptar
    inputDos.value = mensajeEncriptado;
    //Limpio mi input uno
    limpiarCampoUno();
});
