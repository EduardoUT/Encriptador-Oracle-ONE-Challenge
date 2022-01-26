function desencriptarMensaje() {
    var mensaje = document.querySelector("#input-texto").value;
    var decript = "";

    decript= mensaje.replace(/ai/g, letras[0]).replace(/enter/g, letras[1]).
    replace(/imes/g, letras[2]).replace(/ober/g, letras[3]).replace(/ufat/g, letras[4]);
    
        
    console.log("Desencriptado: " + decript);
    document.getElementById("msg").value = decript;

    limpiarCampoUno();

}