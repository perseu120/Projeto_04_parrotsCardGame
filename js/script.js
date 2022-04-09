let qtnCartas;

const vetorCartas = ["img/bobrossparrot.gif", "img/bobrossparrot.gif", "img/explodyparrot.gif", "img/explodyparrot.gif","img/fiestaparrot.gif", "img/fiestaparrot.gif", "img/metalparrot.gif", "img/metalparrot.gif", "img/revertitparrot.gif", "img/revertitparrot.gif", "img/tripletsparrot.gif", "img/tripletsparrot.gif", "img/unicornparrot.gif", "img/unicornparrot.gif" ];
const vetorEmbaralhado = [];
function iniciaJogo() {
    do {
        qtnCartas = prompt("Escolha quantidade de cartas entre 4 e 14");
    } while ((qtnCartas < 4 || qtnCartas > 14 ) || qtnCartas % 2 === 1 );

    let lista = document.querySelector(".container");


    for (let i = 0; i < qtnCartas; i++) {

        vetorEmbaralhado.push(vetorCartas[i]);

        lista.innerHTML += `<div class="carta" onclick=" girarCarta(this)">

            <div class = "frente cartaLayout" >
                <img src="../${vetorEmbaralhado[i]}" alt="">
            </div>
            <div class="fundo cartaLayout">
                <img src="img/front.png" alt="">
            </div>

        </div>`
    }

}

function girarCarta(element){
    const carta = element;
    carta.classList.toggle("flip");
}
iniciaJogo();
