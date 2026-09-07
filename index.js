// ¡Buena suerte!
const alturaInput = document.querySelector("#height");
const pesoInput = document.querySelector("#weight");
const boton = document.querySelector("#btn");
const resultado = document.querySelector("#bmi-result");
const condicionResultado = document.querySelector("#weight-condition");

boton.addEventListener("click", function () {
    const peso = pesoInput.value / 100;
    const altura = alturaInput.value;
    const indiceMasaCorporal = peso / (altura * altura);
    resultado.value = indiceMasaCorporal;
    if (indiceMasaCorporal < 18.5) {
        condicionResultado.textContent = "Bajo peso";
    } else if (indiceMasaCorporal >= 18.5 && imc <= 24.9) {
        condicionResultado.textContent = "Peso normal";
    } else if (indiceMasaCorporal >= 25 && imc <= 29.9) {
        condicionResultado.textContent =  "Sobrepeso";
    } else {condicionResultado.textContent =  "Obesidad " };
});
