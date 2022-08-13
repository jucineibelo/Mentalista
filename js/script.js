var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var ElementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto) {
        ElementoResultado.innerHTML = "Você acertou"
    } else if ( chute > 10 || chute < 0) {
        ElementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
        ElementoResultado.innerHTML = "Errou!!!"
    }
}