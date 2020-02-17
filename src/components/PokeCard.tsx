import React from 'react';
import Pokemon from '../interfaces/IPokemon';
import '../components/styles/pokecard.css';

const PokeCard: React.FC<Pokemon> = ({ name, type, number, image }: Pokemon) => {
  return (
    <>
      <div className="card text-center bg-card-1">
        <div className="card-body">
          <h5 className="card-title">
            {name || 'Name of the pokémon'} #{number || 'Number of the pokémon'}
          </h5>
          <img src={image} alt="" />
        </div>
        <div className="card-footer text-white">{type || 'The type of the pokémon'}</div>
      </div>
    </>
  );
};

export default PokeCard;
