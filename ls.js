let slidere = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")
let sizePassoword = document.querySelector("#valor")
let password = document.querySelector("#password")
let container = document.querySelector("#passs")
let charset = "awertyuiopçlkjhgfdsazxcvbnmçQWERTYUIOPÇLKJHGFDSAZXCVBNM123456789"
let newPassa = ""



sizePassoword.innerHTML = slidere.value;

slider.oninput = function (){
    sizePassoword.innerHTML = this.value;

}
function generationPass (){
    let pas = ""
    for(let i = 0 , n = charset.length; i < slidere.value; i++){
        pas += charset.charAt(Math.floor(Math.random()* n))
    }
    container.classList.remove("up")
password.innerHTML = pas;
newPass = pas ;
}
function copy() {
    alert("SENHA COPIADA COM SUCESSO !")
    navigator.clipboard.writeText(newPass);
}