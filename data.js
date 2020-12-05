export const inputNome = (buscarNome, array) => {
  return array.filter(pokemon => pokemon.name.startsWith(buscarNome));
};

export const menuSelectTipo = (buscarTipo, array) => {
  return array.filter(pokemon => pokemon.type.includes(buscarTipo)); 
};

export const calculoTipo = (totalPokeTipo, array) => {
  ((totalPokeTipo / array) * 100);
  
};
  
const ordenarNumero = (a, b) => {
  if (a.name > b.name) {
    return 1;
  } if (a.name < b.name) {
    return -1;
  }
  return 0
};

export const selectNumeroCrescente = (array) => {
  array.sort(ordenarNumero);
}

export const selectNumeroDecrescente = (array) => {
  array.sort(ordenarNumero).reverse();
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

    
const ordenarNome = (a, b) => {
  if (a.name > b.name) {
    return 1;
  } if (a.name < b.name) {
    return -1;
  }
  return 0
};

export const selectNomeCrescente = (array) => {
  array.sort(ordenarNome);
}

export const selectNomeDecrescente = (array) => {
  array.sort(ordenarNome).reverse();
};




// export const selectNumeroCrescente = (ordenarNumeroCrescente, array) => {
//   array.sort(function (a, b) {
//     if (a.name > b.name) return 1;
//     if (a.name < b.name) return -1;
//     return 0
//   });
// };
  
// export const selectNumeroDecrescente = (ordenarNumeroDecrescente, array) => {
//   array.sort(function (a, b) {
//     if (a.name > b.name) return -1;
//     if (a.name < b.name) return 1;
//     return 0
//   });
// };

// export const selectNomeCrescente = (ordenarNomeCrescente, array ) => {
//   array.sort(function (a, b) {
//     if (a.name > b.name) return 1;
//     if (a.name < b.name) return -1;
//     return 0
//   });
// };

// export const selectNomeDecrescente = (ordenarNomeDecrescente, array ) => { 
//   array.sort(function (a, b) {
//     if (a.name > b.name) return -1;
//     if (a.name < b.name) return 1;
//     return 0
//   });
// };

//funções que fazem ordenação e filtro

//include 
// checar se um array/objeto possui determinado valor/elemento.

//startsWith 
// Quando começa a escrever ele vai mostrando sugestoes que começam com a letra
// O método startsWith() determina se uma string começa com os caracteres especificados, retornando true ou false.
// Esse método é case-sensitive (difere maiúsculas de minúsculas, e vice-versa). 
