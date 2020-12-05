import { inputNome, menuSelectTipo, calculoTipo, selectNumeroCrescente, selectNumeroDecrescente, selectNomeCrescente, selectNomeDecrescente } from '../src/data.js';

describe('inputNome', () => {
  it('Deve ser uma função', () => {
    expect(typeof inputNome).toBe('function');
  });

  it('Deve retornar pokemons que iniciam o nome com "gol"', () => {
    const pokemons = [
      {"num": "042",
      "name": "golbat",
      "type": [
        "poison",
        "flying"
      ]},

      {"num": "055",
      "name": "golduck",
      "type": [
        "water"
      ]},

      {
      "num": "076",
      "name": "golem",
      "type": [
        "rock",
        "ground"
      ]},   
    ];

    let buscarNome = "gold"
    const nome = inputNome(buscarNome, pokemons);
    expect(nome[0].name).toEqual("golduck")
 
  });

  it('Deve ser uma "string', () => {
    expect(() => inputNome("golem", 4)).toThrow(TypeError);
  });
});

describe('menuSelectTipo', () => {
  it('Deve ser uma função', () => {
    expect(typeof menuSelectTipo).toBe('function');
  });

  it('Deve retornar pokemons do tipo "bug"', () => {
    const pokemons = [
      {"num": "042",
      "name": "golbat",
      "type": [
        "poison",
        "flying"
      ]},

      {"num": "001",
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"
      ]},

      {"}num": "010",
      "name": "caterpie",
      "type": [
        "bug"
      ]}, 
    ];

    let buscartipo = "bug"
    const tipo= menuSelectTipo(buscartipo, pokemons);
    expect(tipo[0].name).toEqual("caterpie")
 
  });
});

describe('calculoTipo', () => {
  it('Deve ser uma função', () => {
    expect(typeof calculoTipo).toBe('function');
  });

  it('Deve retornar o resultado do calculo', () => {
    const pokemons = [
      {"num": "001",
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"
      ]},

      {"num": "025",
      "name": "pikachu",
      "type": [
        "electric"
      ]},

      {"num": "172",
      "name": "pichu",
      "type": [
        "electric"
      ]},

      {"num": "010",
      "name": "caterpie",
      "type": [
        "bug"
      ]}, 
    ];

    let buscartipo = "bug"
    const tipo= menuSelectTipo(buscartipo, pokemons);
    const calculo = calculoTipo(tipo, pokemons)
    expect(calculo).toEqual(25)
 
  });
});

describe('selectNumeroCrescente', () => {
  it('Deve ser uma função', () => {
    expect(typeof selectNumeroCrescente).toBe('function');
  });

  it('Deve retornar em ordem númerica de "01-251"', () => {
    const pokemons = [
      {"num": "025",
      "name": "pikachu",
      "type": [
        "electric"
      ]},

      {"num": "172",
      "name": "pichu",
      "type": [
        "electric"
      ]},

      {"num": "010",
      "name": "caterpie",
      "type": [
        "bug"
      ]}, 
    ];

    let ordenarNumeroCrescente = "01-251"
    const ordenarNumeroCres = selectNumeroCrescente(ordenarNumeroCrescente, pokemons);
    expect(ordenarNumeroCres[0].name).toEqual("caterpie")

  });
});

describe('selectNumeroDecrescente', () => {
  it('Deve ser uma função', () => {
    expect(typeof selectNumeroDecrescente).toBe('function');
  });

  it('Deve retornar em ordem númerica de "251-01"', () => {
    const pokemons = [
      {"num": "172",
      "name": "pichu",
      "type": [
        "electric"
      ]},

      {"num": "025",
      "name": "pikachu",
      "type": [
        "electric"
      ]},

      {"num": "010",
      "name": "caterpie",
      "type": [
        "bug"
      ]}, 
    ];

    let ordenarNumeroDecrescente = "251-01"
    const ordenarNumeroDecre = selectNumeroDecrescente(ordenarNumeroDecrescente, pokemons);
    expect(ordenarNumeroDecre[0].name).toEqual("pichu")
 
  });
});

describe('selectNomeCrescente', () => {
  it('Deve ser uma função', () => {
    expect(typeof selectNomeCrescente).toBe('function');
  });

  it('Deve retornar em ordem alfabética de "A-Z"', () => {
    const pokemons = [
      {"num": "042",
      "name": "golbat",
      "type": [
        "poison",
        "flying"
      ]},

      {"num": "001",
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"
      ]},

      {"}num": "010",
      "name": "caterpie",
      "type": [
        "bug"
      ]}, 
    ];

    let ordenarNomeCrescente = "A-Z"
    const ordenarNomeCres = selectNomeCrescente(ordenarNomeCrescente, pokemons);
    expect(ordenarNomeCres[0].name).toEqual("bulbasur")
 
  });
});

describe('selectNomeDecrescente', () => {
  it('Deve ser uma função', () => {
    expect(typeof selectNomeDecrescente).toBe('function');
  });

  it('Deve retornar em ordem alfabética de "Z-A"', () => {
    const pokemons = [
      {"num": "001",
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"
      ]},

      {"num": "042",
      "name": "golbat",
      "type": [
        "poison",
        "flying"
      ]},

      {"}num": "010",
      "name": "caterpie",
      "type": [
        "bug"
      ]}, 
    ];

    let ordenarNomeCrescente = "A-Z"
    const ordenarNomeDecre = selectNomeDecrescente(ordenarNomeCrescente, pokemons);
    expect(ordenarNome[0].name).toEqual("golbat")
 
  });
});
