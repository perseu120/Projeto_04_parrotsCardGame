let qtnCartas;
let contador = 0;
let idInterval;
let minuto ;
let segundo ;

const vetorCartas = ["bobrossparrot", "bobrossparrot", "explodyparrot", "explodyparrot","fiestaparrot", "fiestaparrot", "metalparrot", "metalparrot", "revertitparrot", "revertitparrot", "tripletsparrot", "tripletsparrot", "unicornparrot", "unicornparrot" ];
const vetorEmbaralhado = [];
const vetorCartaClicada = ['0'];

function iniciaJogo() {

    minuto = 0;
    segundo = 0;
    do {
        qtnCartas = prompt("Escolha quantidade de cartas entre 4 e 14");
    } while ((qtnCartas < 4 || qtnCartas > 14 ) || qtnCartas % 2 === 1 );

    let lista = document.querySelector(".container");


    for (let i = 0; i < qtnCartas; i++) {

        vetorEmbaralhado.push(vetorCartas[i]);

    }
    vetorEmbaralhado.sort(comparador);

    for(let i = 0; i< vetorEmbaralhado.length; i++){
        
        lista.innerHTML += `<div class="carta" onclick=" girarCarta(this)">

            <div class = "frente cartaLayout" >
                <img src="../img/${vetorEmbaralhado[i]}.gif" alt="">
            </div>
            <div class="fundo cartaLayout">
                <img src="img/front.png" alt="">
            </div>

        </div>`
    }
    contadorTime()

}

function comparador() { 
	return Math.random() - 0.5; 
}

function girarCarta(element){
    const carta = element;
    contador ++;
    
    carta.classList.toggle("flip");
   

    if(vetorCartaClicada[0] === '0'){
        vetorCartaClicada[0] = carta.querySelector(".frente");

    }else if(vetorCartaClicada[0].querySelector("img").getAttribute('src') === carta.querySelector(".frente").querySelector("img").getAttribute('src') ){
        vetorCartaClicada[0] = '0';
        fimDeJogo();
        
    }else{
        setTimeout( ()=>{

            vetorCartaClicada[0].parentNode.classList.remove("flip");
            carta.classList.remove("flip");
            vetorCartaClicada[0] = '0';
        } , 1000) 
       
    }
    
}
// setTimeout( fimDeJogo, 3000);

function fimDeJogo(){
    

    if(document.querySelectorAll(".flip").length === Number(qtnCartas)){
        clearInterval(idInterval);
        alert(`Fim de Jogo PARABÊNS você venceu em ${contador} Jogadas e gastou ${minuto}min e ${segundo}s`)
        
        let resposta = prompt("deseja jogar novamente?");

        if(resposta == 'sim' ){
            document.location.reload(true);
        }

    }

    
}

function contadorTime(){
    
    

    idInterval =  setInterval(() => {
        segundo ++;

        if(segundo === 60){
            minuto++;
            document.querySelector(".relogio").querySelector(".min").innerHTML= minuto;
            segundo = 0;
        }
        document.querySelector(".relogio").querySelector(".seg").innerHTML = segundo;


    }, 1000);


}

iniciaJogo();
