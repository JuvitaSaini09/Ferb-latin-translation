var input = document.querySelector(".inputText");
var btn_translate = document.querySelector(".translate-btn");
var output = document.querySelector(".outputText");

function getText(inputt) {
    var text = "https://api.funtranslations.com/translate/ferb-latin.json" + "?" + "text=" + inputt;
    return text;

}

function errorHandler(error) {
    console.log("error !!", error);
    alert("something went wrong !!");
}

function Handler() {
    fetch(getText(input.value))
        .then(res => res.json())
        .then(json => {
            var banana_translation = json.contents.translated;
            output.innerText = banana_translation;

        })
        .catch(errorHandler);
}

btn_translate.addEventListener("click", Handler)