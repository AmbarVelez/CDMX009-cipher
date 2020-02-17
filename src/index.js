/*funcion para cambios de pagina*/
function mostrarSiguienteContenedor(idDelContenedorParaMostrar, idDelContenedorParaOcultar) {
document.getElementById(idDelContenedorParaMostrar).style.display = "block";

document.getElementById(idDelContenedorParaOcultar).style.display ="none";
}

/*funcion para copiar*/
function copiarResultado() {
  let elementoResultado = document.getElementById("resultados");
  let range = document.createRange();
  range.selectNode(elementoResultado);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}
