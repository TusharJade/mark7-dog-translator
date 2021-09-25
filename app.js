var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json"

function translated(text) {
    return url + "?" + "text=" + text
}

var btn = function act() {
    fetch(translated(txtInput.value))
        .then(response => response.json())
        .then(abc => outputdiv.innerText = abc.contents.translated)
        .catch(error => console.log("errore occured", error))
}
btnTranslate.addEventListener("click", btn);
