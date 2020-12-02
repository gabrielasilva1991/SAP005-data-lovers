export const inputNome = (buscarNome, array) => {
  return array.filter(pokemon => pokemon.name.startsWith(buscarNome)); //retorna se a string passada está no começo 
};

export const selectNumero = (buscarNumero, array) => {
  return array.filter(pokemon => pokemon.num.includes(buscarNumero)); // checar se o parametro está em algum lugar da string
};

export const selectTipo = (buscarTipo, array) => {
  return array.filter(pokemon => pokemon.type.includes(buscarTipo));
};


export const calculoTipo = (buscarTipo, array) => {
  const calculo = pokemons.filter(pokemon => pokemon.type.includes(buscarTipo));
  
};
   

export const selectRaridade = (buscarRaridade, array) => {
  return array.filter(pokemon => pokemon.pokemon-rarity.includes(buscarRaridade));
};

export const ordenarCrescente = (ordenarCrescente, array ) => {
  array.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0
  });
};

export const ordenarDecrescente = (ordenarDecrescente, array ) => { 
  array.sort(function (a, b) {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0
  });
};


//return data.filter((pokemon) => pokemon.type.includes(buscarTipo));
//return agua = data.filter((pokemon) => pokemon.type === 'water'));
//Água Dragão Elétrico Fada Fantasma Fogo Gelo Inseto Lutador Metálico Normal Noturno Pedra Planta Psíquico Terrestre Venenoso Voador
//water dragon electric fairy fire ice bug fighting metallic normal dark psychic grass ground poison flying
