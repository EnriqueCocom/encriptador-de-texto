const textArea = document.querySelector(".areatexto");
const mensaje = document.querySelector(".mensaje");
const caja = document.querySelector(".cajaimagen");
const copia = document.querySelector(".btn-copiar");
copia.style.display = "none";
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function validarTexto(){
  let textoEscrito = document.querySelector(".areatexto").value;
  let validador = textoEscrito.match(/^[a-z]*$/);


  if(!validador || validador === 0 || textoEscrito === "") {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Necesita escribir el texto',
    })
    // location.reload();
    return true;
  }
}

function btnEncriptar(){
  if(!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    caja.style.display = "none";
    copia.style.display="block";
  }
}

function encriptar(stringEncriptado){
  let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase() //Conversión a minúsculas.

  for(let i = 0; i < matriz.length; i++){
    if(stringEncriptado.includes(matriz[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(matriz[i][0], matriz[i][1])
    }
  }
  return stringEncriptado;
}

function btnDesencriptar(){
  if(!validarTexto()){

    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    caja.style.display = "none";
  }
}

function desencriptar(stringDesencriptado){
  let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase() //Conversión a minúsculas.

  for(let i = 0; i < matriz.length; i++){
    if(stringDesencriptado.includes(matriz[i][1])){
      stringDesencriptado = stringDesencriptado.replaceAll(matriz[i][1], matriz[i][0])
    }
  }
  return stringDesencriptado;
}

function btnCopiar(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value= "";
  Swal.fire(
    '',
    'Texto copiado con éxito!',
    'success'
  )
}
