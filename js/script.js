let qtnCartas;

function iniciaJogo(){
    do{
        qtnCartas = prompt("Escolha quantidade de cartas entre 4 e 14, digite abaixo de 4 para Desistir");
    }while(qtnCartas%2 === 1 && qtnCartas > 4);

    let lista = document.querySelector(".container");


    for(let i=0 ; i<qtnCartas; i++){
        lista.innerHTML += `<article>
    <img src="img/front.png" alt="">
    </article>`
    }

}

iniciaJogo();
