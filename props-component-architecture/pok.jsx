import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'; 

function Pokedex(props) {
  const { pokemon } = props;

  return (
    <div className="Pokedex">
      {pokemon.map(p => (
        <Pokecard
          key={p.id} 
          id={p.id}
          name={p.name}
          type={p.type}
          image={p.image}
        />
      ))}
    </div>
  );
}

export default Pokedex;


import React from 'react';
import './Pokecard.css'; 
function Pokecard(props) {
  const { id, name, type, image } = props;

  return (
    <div className="Pokecard">
      <h2 className="Pokecard-name">{name}</h2>
      <img src={image} alt={name} className="Pokecard-image" />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">ID: {id}</div>
    </div>
  );
}

export default Pokecard;