import { inputNome, menuSelectTipo, calculoTipo, selectNumeroCrescente, selectNumeroDecrescente, selectNomeCrescente, selectNomeDecrescente } from './data.js';

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
}


const tipo = document.getElementById("ordenar-tipo");
tipo.addEventListener("click", tipoPokemon);

function tipoPokemon(event) {
    event.preventDefault();
    const buscarTipo = document.getElementById("ordenar-tipo").value;
    const pokemonTipo = menuSelectTipo(buscarTipo, data.pokemon);
    const calculo = calculoTipo(buscarTipo, data.pokemon).toFixed(2); //casas usadas depois da virgula
    const textPercent = `<p><strong>Os Pokémons de tipo ${buscarTipo} representam ${calculo} % da quantidade total de Pokémons.</strong></p>`
    document.getElementById("calculo-agregado").innerHTML = textPercent;
    mostrarPokemon(pokemonTipo);
}

const limparPesquisa = document.getElementById("recarregar-pagina");
limparPesquisa.addEventListener("click", limpar); 

function limpar (){
    inputNome.value="";
    menuSelectTipo.value="";
    calculoTipo.value="";
    selectNumeroCrescente.value="";
    selectNumeroDecrescente.value="";
    selectNomeCrescente.value="";
    selectNomeDecrescente.value="";
    mostrarPokemon(data.pokemon);
}

const ordenarPokemon = document.querySelector("#ordenar-pokemon");
ordenarPokemon.addEventListener("change", pokemonOrdenar); 


function pokemonOrdenar(){
    const ordenar = ordenarPokemon.value;
    
    if (ordenar === "numero-crescente") {
        document.getElementById("ordenar-pokemon").value;
        selectNumeroCrescente (data.pokemon);
        mostrarPokemon(data.pokemon);
    
    } else if (ordenar === "numero-decrescente") {
        document.getElementById("ordenar-pokemon").value;
        selectNumeroDecrescente (data.pokemon);
        mostrarPokemon(data.pokemon);
    
    } else if (ordenar === "nome-crescente") {
        document.getElementById("ordenar-pokemon").value;
        selectNomeCrescente(data.pokemon);
        mostrarPokemon(data.pokemon);
    
    } else if (ordenar === "nome-decrescente") {
        document.getElementById("ordenar-pokemon").value;
        selectNomeDecrescente(data.pokemon);
        mostrarPokemon(data.pokemon);

    }
}