import { inputNome, menuSelectTipo, selectNumeroCrescente, selectNumeroDecrescente, selectNomeCrescente, selectNomeDecrescente } from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon

function mostrarPokemon(pokeFiltrado) {
    let cards = document.querySelector('#mostrar-cards');
    cards.innerHTML = "";
    
    for (let pokemon of pokeFiltrado){
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

        const numero = document.createElement("p");
        numero.innerHTML = pokemon.num
        div.appendChild(numero)
        div.classList.add("cards-numeros")
      
        cards.appendChild(div)
    }
}
mostrarPokemon(pokemons)


const button = document.getElementById("buscar-poke"); //local onde acontece ação no html
button.addEventListener("click", nomePokemon); 

function nomePokemon(event) {
    event.preventDefault(); // parar execução padrão de um evento/ parar navegação padrão que o navegador ia atribuir ao evento / evita que o site carregue a opção sem que ela esteja com o nome digitado
    const buscarPokemon = document.getElementById("buscar-pokemon").value; //campo onde digita o nome do pokemon
    const pokemonNome = inputNome(buscarPokemon, data.pokemon);
    mostrarPokemon(pokemonNome);
    
    //console.log(pokemonNome)
};


const tipo = document.getElementById("ordenar-tipo");
tipo.addEventListener("click", tipoPokemon);

function tipoPokemon(event) {
    event.preventDefault();
    const buscarTipo = document.getElementById("ordenar-tipo").value;
    const pokemonTipo = menuSelectTipo(buscarTipo, data.pokemon);
    mostrarPokemon(pokemonTipo);

   //console.log(event.target)
};


const tipoCalculo = document.getElementById("calculo-agregado");
tipoCalculo.addEventListener("onchange", calculo); // assim que mudar o seletor executa a função

function calculo() {
    const tipoBuscar = document.getElementById("calculo-agregado").value;
    const tipoPokemon = menuSelectTipo(buscarTipo, data.pokemon);
    const calculoTipo = calculoTipo(totalPokeTipo.length, data.pokemon.length).toFixed(2); //casas usadas depois da virgula
    document.getElementById("calculo-agregado").innerHTML = 
    `<div>Os Pokémons de tipo ${tipoBuscar} representam ${calculoTipo} % do total de Pokémons.</div>`
    mostrarPokemon(tipoPokemon);

    console.log(tipoPokemon)
};







const ordenarPokemon = document.getElementById("ordenar-pokemon");
ordenarPokemon.addEventListener("change", pokemonOrdenar);

function pokemonOrdenar() {

    if ("numero-crescente") {
        document.getElementById("ordenar-pokemon").value;
        selectNumeroCrescente(data.pokemon);
        mostrarPokemon(data.pokemon);
    
    } else if ("numero-decrescente") {
        document.getElementById("ordenar-pokemon").value;
        selectNumerodecrescente(data.pokemon);
        mostrarPokemon(data.pokemon);
    
    } else if ("nome-crescente") {
        document.getElementById("ordenar-pokemon").value;
        selectNomeCrescente(data.pokemon);
        mostrarPokemon(data.pokemon);
    
    } else if ("nome-decrescente") {
        document.getElementById("ordenar-pokemon").value;
        selectNomeDecrescente(data.pokemon);
        mostrarPokemon(data.pokemon);
    }
};








// const numeroCrescente = document.getElementById("ordenar-pokemon");
// numeroCrescente.addEventListener("change", numeroPokemonCrescente);

// function numeroPokemonCrescente(event) {
//     event.preventDefault();
//     const ordenarNumeroCrescente = document.getElementById("ordenar-pokemon").value;
//     const pokemonNumeroCrescente = selectNumeroCrescente(ordenarNumeroCrescente, data.pokemon);
//     mostrarPokemon(pokemonNumeroCrescente);

//     //console.log(pokemonNumeroCrescente)
// };


// const numeroDecrescente = document.getElementById("ordenar-pokemon");
// numeroDecrescente.addEventListener("change", numeroPokemonDecrescente);

// function numeroPokemonDecrescente(event) {
//     event.preventDefault();
//     const ordenarNumeroDecrescente = document.getElementById("ordenar-pokemon").value;
//     const pokemonNumeroDecrescente = selectNumeroDecrescente(ordenarNumeroDecrescente, data.pokemon);
//     mostrarPokemon(pokemonNumeroDecrescente);

//     //console.log(pokemonNumeroDecrescente)
// };


// const nomeCrescente = document.getElementById("ordenar-pokemon");
// nomeCrescente.addEventListener("change", nomePokemonCrescente);

// function nomePokemonCrescente(event) {
//     event.preventDefault();
//     const ordenarNomeCrescente = document.getElementById("ordenar-pokemon").value;
//     const pokemonNomeCrescente = selectNumero(ordenarNomeCrescente, data.pokemon);
//     mostrarPokemon(pokemonNomeCrescente);

//     //console.log(pokemonNomeCrescente)
// };


// const nomeDecrescente = document.getElementById("ordenar-pokemon");
// nomeDecrescente.addEventListener("change", nomePokemonDecrescente);

// function nomePokemonDecrescente(event) {
//     event.preventDefault();
//     const ordenarNomeDecrescente = document.getElementById("ordenar-pokemon").value;
//     const pokemonNomeDecrescente = selectNumero(ordenarNomeDecrescente, data.pokemon);
//     mostrarPokemon(pokemonNomeDecrescente);

//     //console.log(pokemonNomeDecrescente)
// };
 

// funções que se ligam com o html
// const div = `<div>${pokemon.name}</div>`