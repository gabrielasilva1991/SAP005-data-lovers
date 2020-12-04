export const inputNome = (buscarNome, array) => {
  return array.filter(pokemon => pokemon.name.startsWith(buscarNome));
  // Quando começa a escrever ele vai mostrando sugestoes que começam com a letra
  // O método startsWith() determina se uma string começa com os caracteres especificados, retornando true ou false.
  // Esse método é case-sensitive (difere maiúsculas de minúsculas, e vice-versa). 
};

export const selectNumeroCrescente = (buscarNumero, array) => {
  array.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0
  });
};
  
export const selectNumeroDecrescente = (buscarNumero, array) => {
  array.sort(function (a, b) {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0
  });
};

export const selectTipo = (buscarTipo, array) => {
  return array.filter(pokemon => pokemon.type.includes(buscarTipo)); // checar se um array/objeto possui determinado valor/elemento.
};


export const calculoTipo = (buscarTipo, array) => {
  const calculo = pokemons.filter(pokemon => pokemon.type.includes(buscarTipo));
  
};
    
    export const selectNomeCrescente = (array) => {
      const ordenarNome = (a, b) => {
        if (a.name > b.name) {
          return 1;
        } if (a.name < b.name) {
          return -1;
        }
        return 0;
      }
      array.sort(ordenarNome);
    }

    export const selectNomeDecrescente = (array) => {
      const ordenarNome = (a, b) => {
        if (a.name > b.name) {
          return -1;
        } if (a.name < b.name) {
          return 1;
        }
        return 0
      }
      array.sort(ordenarNome);
    }

    



//funções que fazem ordenação e filtro
//return data.filter((pokemon) => pokemon.type.includes(buscarTipo));
//return agua = data.filter((pokemon) => pokemon.type === 'water'));
//Água Dragão Elétrico Fada Fantasma Fogo Gelo Inseto Lutador Metálico Normal Noturno Pedra Planta Psíquico Terrestre Venenoso Voador
//water dragon electric fairy fire ice bug fighting metallic normal dark psychic grass ground poison flying
