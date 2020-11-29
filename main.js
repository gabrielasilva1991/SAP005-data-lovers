import { buscarNumero, buscarTipo, buscarRaridade, buscarEstatisticas, buscarOrdemCrescente, buscarOrdemDecrescente } from './data.js';

import data from './data/pokemon/pokemon.js';

function mostrarCards() {
    
    for (let pokemon of data.pokemon){
        const cards = document.querySelector('#mostrar-cards');

        const div = document.createElement("div")
        div.classList.add("div-cards")

        const imagem = document.createElement("img");
        imagem.src = pokemon.img
        div.appendChild(imagem) 
        div.classList.add("cards-imagens")
        
        const nome = document.createElement("h2");
        nome.innerHTML = pokemon.name.toUpperCase()
        div.appendChild(nome)
        div.classList.add("cards-nomes")
        
        const tipo = document.createElement("p");
        tipo.innerHTML = pokemon.type.join(", ")
        div.appendChild(tipo)
        div.classList.add("cards-tipos")
      
        cards.appendChild(div)
    }

}
mostrarCards()




// funções que se ligam com o html


//document.querySelector(".sidebar").addEventListener("click", function);
//const imagem = document.getElementsByClassName("pokemon.img")

// console.log(pokemon)
// console.log(h2)
// console.log(imagem)
// const div = `<div>${pokemon.name}</div>`

