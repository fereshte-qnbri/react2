import React from 'react';
import Pokedex from './Pokedex';
import './App.css'; 

function App() {
  const pokemonData = [
    {
      id: 4,
      name: 'Charmander',
      type: 'fire',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      id: 7,
      name: 'Squirtle',
      type: 'water',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      id: 12,
      name: 'Butterfree',
      type: 'flying',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
    {
      id: 19,
      name: 'Rattata',
      type: 'normal',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    },
    {
      id: 11,
      name: 'Metapod',
      type: 'bug',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
  ];

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokemon={pokemonData} />
    </div>
  );
}

export default App;