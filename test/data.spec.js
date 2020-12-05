import { inputNome, menuSelectTipo } from '../src/data.js';
import data from './mock.js';

describe('inputNome', () => {
  it('Deve ser uma função', () => {
    expect(typeof inputNome).toBe('function');
  });

  it('Deve retornar pokemons que iniciam o nome com "gol"', () => { 
    expect(inputNome("gol", data.pokemon)).toStricEqual([{
      "num": "042",
      "name": "golbat",
      "type": [
        "poison",
        "flying"
      ],

      "num": "055",
      "name": "golduck",
      "type": [
        "water"
      ],

      "num": "076",
      "name": "golem",
      "type": [
        "rock",
        "ground"
      ],   
  
    }]);
  });
});

describe('menuSelectTipo', () => {
  it('Deve ser uma função', () => {
    expect(typeof menuSelectTipo).toBe('function');
  });

  it('Deve retornar pokemons que são do tipo "water"', () => {
    expect(menuSelectTipo("water", data.pokemon)).toStricEqual([{
      "num": "055",
      "name": "golduck",
      "type": [
        "water"
      ],

      "num": "183",
      "name": "marill",
      "type": [
        "water",
        "fairy"
      ],

      "num": "194",
      "name": "wooper",
      "type": [
        "water",
        "ground"
      ],
    
    }]);
  });
});