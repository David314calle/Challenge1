var textArea = document.querySelector(".text-area");
var mensaje = document.querySelector (".mensaje");

function btnEncriptar(){
    var textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a","ai"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    var textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a","ai"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function copiar(){
    var texto = document.getElementById("mensaje");
    mensaje.select();
    mensaje.setSelectionRange(0,99999);
    document.execCommand("copy")
}
