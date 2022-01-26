function copiarMensaje() {
    var copiarTexto = document.querySelector("#msg");
    copiarTexto.select();
    document.execCommand("copy");
    alert("Texto copiado en el portapapeles.")
}

document.querySelector("#btn-copy").addEventListener("click", copiarMensaje);