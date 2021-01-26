export const inputNome = (buscarNome, array) => {
  if(typeof inputNome === "number"){
    throw new TypeError("Digite o nome do pokémon que deseja pesquisar");
  }
  return array.filter(pokemon => pokemon.name.startsWith(buscarNome));
};

export const menuSelectTipo = (buscarTipo, array) => {
  return array.filter(pokemon => pokemon.type.includes(buscarTipo)); 
};

export const calculoTipo = (buscarTipo, array) => {
  return ((buscarTipo.length / array.length) * 100);
};

const ordenarNumero = (a, b) => {
  if (a.num > b.num) {
    return 1;
  } if (a.num < b.num) {
    return -1;
  }
  return 0
};

export const selectNumeroCrescente = (array) => {
  return array.sort(ordenarNumero);
}

export const selectNumeroDecrescente = (array) => {
  return array.sort(ordenarNumero).reverse();
};

const ordenarNome = (a, b) => {
  if (a.name > b.name) {
    return 1;
  } if (a.name < b.name) {
    return -1;
  }
  return 0
};

export const selectNomeCrescente = (array) => {
  return array.sort(ordenarNome);
}

export const selectNomeDecrescente = (array) => {
  return array.sort(ordenarNome).reverse();
};

//funções que fazem ordenação e filtro

//include 
// checar se um array/objeto possui determinado valor/elemento.

//startsWith 
// Quando começa a escrever ele vai mostrando sugestoes que começam com a letra