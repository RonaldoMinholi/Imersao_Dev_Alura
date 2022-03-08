const $button = window.document.querySelector("button");
const $input = document.querySelector("input");
const $media = document.querySelector("#media");
const $aprovada = document.querySelector("#aprovada");
const $registros = document.querySelector("#registros");

let total = 0;
let qtdNotas = 0;
let media = 0;
let aprovada = "Não";

function handleClick(event) {
    event.preventDefault();

    const nota = Number($input.value);

    if (nota >= 0 && nota <= 10 && nota !== '') {
        total = total + nota;
        qtdNotas = qtdNotas + 1;

        media = total / qtdNotas;

        if (media >= 7) {
            aprovada = "Sim";
        } else {
            aprovada = "Não";
        }

        $media.textContent = media.toFixed(1);
        $aprovada.textContent = aprovada;

        $registros.insertAdjacentHTML("beforeend", `<li>${nota}</li>`);
    }
}

$button.addEventListener("click", handleClick);