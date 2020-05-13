/*funcion numero de desplazamientos*/
function desplazamientos(){
  let numero = document.getElementById("numero").value;
}

/*funcion para cifrar*/
function cifrar(elemento){
  let texto = document.getElementById("textoEscrito").value;
  let texto_cifrado = "";
  let desplazamiento = document.getElementById("numero").value;

  for (let i = 0; texto.length > i; i++){ /*i por index iteracion (posicion)
    let codigoASC = texto[i].charCodeAt(); /*Devuelve el Unicode del primer carácter en una cadena */
    if (codigoASC >= 65 && codigoASC <= 90){
      texto_cifrado = texto_cifrado + String.fromCharCode((codigoASC - 65 + Number(desplazamiento)) % 26 + 65) */*Convierta un número Unicode en un carácter/*
    } else if (codigoASC >= 97 && codigoASC <= 122){
      texto_cifrado = texto_cifrado + String.fromCharCode((codigoASC - 97 + Number(desplazamiento)) % 26 + 97)
    }
  }
  document.getElementById("resultados").innerHTML = texto_cifrado;
}


/*Funcion para descifrar */
function descifrar(elemento){
  let texto = document.getElementById("textoEscrito").value;
  let texto_descifrado = "";
  let desplazamiento = document.getElementById("numero").value;

  for (let i = 0; texto.length > i; i++){
    let codigoASC = texto[i].charCodeAt();
    if (codigoASC >= 65 && codigoASC <= 90){
      texto_descifrado = texto_descifrado + String.fromCharCode((codigoASC + 65 - Number(desplazamiento)) % 26 + 65)
    } else if (codigoASC >= 97 && codigoASC <= 122){
      texto_descifrado = texto_descifrado + String.fromCharCode((codigoASC + 85 - Number(desplazamiento)) % 26 + 97)
    }
  }
  document.getElementById("resultados").innerHTML = texto_descifrado;
 }
