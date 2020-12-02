import { inputNome, selectNumero, selectTipo, calculoTipo, selectRaridade, ordenarCrescente, ordenarDecrescente } from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon

function mostrarPokemon(pokeFiltrado) {
    
    for (let pokemon of pokeFiltrado){
        const cards = document.querySelector('#mostrar-cards');
        //cards.innerHTML = "";

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
mostrarPokemon(pokemons)

const button = document.getElementById("buscar-poke");
button.addEventListener("click", nomePokemon);

function nomePokemon(event) {
    event.preventDefault(); // parar execução padrão de um evento/ parar navegação padrão que o navegador ia atribuir ao evento / evita que o site carregue a opção sem que ela esteja com o nome digitado
    const buscarPokemon = document.getElementById("buscar-pokemon").value; //campo onde digita o nome do pokemon
    const pokemonNome = inputNome(buscarPokemon, data.pokemon);
    mostrarPokemon(pokemonNome);
    
    //console.log(pokemonNome)
};

const numero = document.getElementById("ordenar-pokemon");
numero.addEventListener("change", numeroPokemon);

function numeroPokemon(event) {
    event.preventDefault();
    const buscarNumero = document.getElementById("ordenar-pokemon").value;
    const pokemonNumero = selectNumero(buscarNumero, data.pokemon);
    mostrarPokemon(pokemonNumero);

    //console.log(pokemonNumero)
};


const tipo = document.getElementById("ordenar-tipo");
tipo.addEventListener("click", tipoPokemon);

function tipoPokemon(event) {
    event.preventDefault();
    const buscarTipo = document.getElementById("ordenar-tipo").value;
    const pokemonTipo = selectTipo(buscarTipo, data.pokemon);
    mostrarPokemon(pokemonTipo);

    //console.log(pokemonTipo)
};

// const tipoCalculo = 


const raridade = document.getElementById("ordenar-pokemon");
raridade.addEventListener("change", raridadePokemon);

function raridadePokemon(event) {
    event.preventDefault();
    const buscarRaridade = document.getElementById("ordenar-tipo").value;
    const pokemonRaridade = selectRaridade(buscarRaridade, data.pokemon);
    mostrarPokemon(pokemonRaridade);

    //console.log(pokemonRaridade) ==> está com erro
};



// document.getElementById("ordenar-pokemon").onchange() => { //inicia ação qdo for trocado o item no select
//     const pegarValorOrd = document.getElementById("ordenar-pokemon").value;
//     const inputOrd = selectTipo(pokemons, )
// }
// mostrarPokemon()


// funções que se ligam com o html
// const div = `<div>${pokemon.name}</div>`