import { inputNome, menuSelectTipo, selectNumeroCrescente, selectNumeroDecrescente, selectNomeCrescente, selectNomeDecrescente } from '../src/data.js';
import data from './mock.js';

describe('inputNome', () => {
  it('Deve retornar', () => {
    expect(typeof inputNome).toBe('function');
  });

  it('Deve retornar pokemons com nome "bulba"', () => { 
    expect(inputNome("bulba", data.pokemon)).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof menuSelectTipo).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
