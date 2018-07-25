const casas = document.querySelectorAll(".casa");
const tabuleiro = document.querySelector("#tabuleiro");
const sectionsInputs = document.querySelector("#inputs");
const botaoIniciar = document.querySelector("button"); 
const inputs = document.querySelector("input");

let contador = 0;
let jogador1;
let jogador2;
let simbolo1;
let simbolo2;

botaoIniciar.onclick = validarInicio;

//function contador = 0;

function validarInicio(){
    for(input of inputs){
        if(input.value === ""){
            alert("Preencha todos os campos e só depois clique em Iniciar Jogo.");
            return;
        }
    }
    iniciarJogo()
}

function iniciarJogo(){
    jogador1 = inputs[0].value;
    jogador2 = inputs[2].value;
    simbolo1 = inputs[1].value;
    simbolo2 = inputs[3].value;

    for(let casa of casas){
        casa.onclik = clicar;
        casa.innerHTML = "";
    }
    tabuleiro.style.display = "block";
    sectionsInputs.style.display = "flex";
}

for(let casa of casas){
    casa.onclick = clicar;
}

function verificar(){
    if(comparar(casas[0], casas [1], casas[2]) ||
    comparar(casas[3], casas [4], casas[5]) ||
    comparar(casas[6], casas [7], casas[8]) ||
    comparar(casas[0], casas [3], casas[6]) ||
    comparar(casas[1], casas [4], casas[7]) ||
    comparar(casas[2], casas [5], casas[8]) ||
    comparar(casas[0], casas [4], casas[8]) ||
    comparar(casas[2], casas [4], casas[6])){
        for(let casa of casas){
            casa.onclick = null;
        }
        if(contador % 2){
            document.querySelector("#vencedor").style.innerHTML = "jogador1";
            document.querySelector("#winners").style.transform = "translateY(0)";
        }
        else{
            document.querySelector("#vencedor").style.innerHTML = "jogador2";
            document.querySelector("#winners").style.transform = "translateY(0)";
        }
        
    }
    else if(contador === 9){
        document.querySelector("body").style.backgroundColor = "purple";
    }
}

function comparar(casa1, casa2, casa3){
    if(casa1.innerHTML === casa2.innerHTML && 
       casa2.innerHTML === casa3.innerHTML &&
       casa1.innerHTML !== ""){
           return true;
    }
    return false;
}


function clicar(){
    contador++;
    
    if(contador % 2){
        this.innerHTML= simbolo1;
        this.style.color = "blue";
    }
    else{
        this.innerHTML= simbolo2;
        this.style.color = "green";
    }

    this.onclick = null;

    if (contador >= 5){
        verificar()
    }
}