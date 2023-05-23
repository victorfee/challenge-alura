const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const copiar = document.querySelector(".mensagem")
// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
function btnEncriptar() {   
    const textoEncriptado = encriptar (textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar (stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i"] , ["imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++)   {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
         stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]); 
        
     }
    } 
    

    return stringEncriptada;
} 

function btnDesencriptar() {
    const textoDesencriptado = desencriptar (textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar (stringDesencriptar) {

    let matrizCodigo = [["e" , "enter"] , ["i"] , ["imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++)   {
        if(stringDesencriptar.includes(matrizCodigo[i][1])) {
         stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]); 
        
     }
    } 
    

    return stringDesencriptar;
} 

    //tudoo errado
    // //document.getElementById("execCopy").addEventListener("click" , execCopy);
       
    // function execCopy() {
    //     document.querySelector(".mensagem").select();
    //     document.execCopy(".mensagem").value = cliptext;
    // }//


    function execCopy() {
        const mensagem = document.querySelector(".mensagem");
        mensagem.select();
        document.execCommand("copy");
    }
    
    const botaoCopiar = document.querySelector(".botao-copiar");
    botaoCopiar.addEventListener("click", execCopy);