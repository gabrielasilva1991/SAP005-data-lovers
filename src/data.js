export const inputNome = (buscarNome, array) => {
  return array.filter(pokemon => pokemon.name.startsWith(buscarNome));
  // Quando começa a escrever ele vai mostrando sugestoes que começam com a letra
  // O método startsWith() determina se uma string começa com os caracteres especificados, retornando true ou false.
  // Esse método é case-sensitive (difere maiúsculas de minúsculas, e vice-versa). 
};


export const menuSelectTipo = (buscarTipo, array) => {
  //return array.filter(pokemon => pokemon.type.includes(buscarTipo)); // checar se um array/objeto possui determinado valor/elemento.
  switch (buscarTipo) {  
    case "tipo água":
      return array.filter(pokemon => pokemon.type.water(buscarTipo));
    case "tipo dragão":
      return array.filter(pokemon => pokemon.type.dragon(buscarTipo));
    case "tipo elétrico":
      return array.filter(pokemon => pokemon.type.electric(buscarTipo));
    case "tipo fada":
      return array.filter(pokemon => pokemon.type.fairy(buscarTipo));
    case "tipo fantasma":
      return array.filter(pokemon => pokemon.type.ghost(buscarTipo));
    case "tipo fogo":
      return array.filter(pokemon => pokemon.type.fire(buscarTipo));
    case "tipo gelo":
      return array.filter(pokemon => pokemon.type.ice(buscarTipo));
    case "tipo inseto":
      return array.filter(pokemon => pokemon.type.bug(buscarTipo));
    case "tipo lutador":
      return array.filter(pokemon => pokemon.type.fighting(buscarTipo));
    case "tipo metálico":
      return array.filter(pokemon => pokemon.type.stell(buscarTipo));//
    case "tipo normal":
      return array.filter(pokemon => pokemon.type.normal(buscarTipo));
    case "tipo noturno":
      return array.filter(pokemon => pokemon.type.dark(buscarTipo));
    case "tipo pedra": 
      return array.filter(pokemon => pokemon.type.rock(buscarTipo));
    case "tipo planta":
      return array.filter(pokemon => pokemon.type.grass(buscarTipo));
    case "tipo psíquico":
      return array.filter(pokemon => pokemon.type.psychic(buscarTipo));
    case "tipo terrestre":
      return array.filter(pokemon => pokemon.type.ground(buscarTipo));
    case "tipo venenoso":
      return array.filter(pokemon => pokemon.type.poison(buscarTipo));
    case "tipo voador":
      return array.filter(pokemon => pokemon.type.flying(buscarTipo));
  }
};

export const calculoTipo = (calcularTipo, array) => {
  const calculo = pokemons.filter(pokemon => pokemon.type.includes(buscarTipo));
  
  //export const getPercentage = (quantity, total) => (quantity * 100) / total;
};



export const selectNumeroCrescente = (ordenarNumeroCrescente, array) => {
  array.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0
  });
};
  
export const selectNumeroDecrescente = (ordenarNumeroDecrescente, array) => {
  array.sort(function (a, b) {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0
  });
};

export const selectNomeCrescente = (ordenarNomeCrescente, array ) => {
  array.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0
  });
};

export const selectNomeDecrescente = (ordenarNomeDecrescente, array ) => { 
  array.sort(function (a, b) {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0
  });
};

//funções que fazem ordenação e filtro
//return data.filter((pokemon) => pokemon.type.includes(buscarTipo));
//return agua = data.filter((pokemon) => pokemon.type === 'water'));
//Água Dragão Elétrico Fada Fantasma Fogo Gelo Inseto Lutador Metálico Normal Noturno Pedra Planta Psíquico Terrestre Venenoso Voador
//water dragon electric fairy fire ice bug fighting metallic normal dark psychic grass ground poison flying
