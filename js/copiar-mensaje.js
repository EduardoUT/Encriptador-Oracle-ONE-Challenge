var botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener("click", function(event) {
    event.preventDefault();
    var copiarTexto = document.querySelector("#msg");
    copiarTexto.select();
    document.execCommand("copy");
    alert("Texto copiado en el portapapeles.");
});