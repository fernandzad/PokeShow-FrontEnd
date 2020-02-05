import React from 'react';
import PokeCard from './PokeCard';
import useFetch from '../hooks/useFetch';
import IPokemon from '../interfaces/IPokemon';
import Loader from './Loader'


const PokemonList: React.FC = () => {
    let { pokecards, loading } = useFetch(process.env.REACT_APP_API_URL || '');
        
    if(loading === true)
        return <Loader />
    return (
        <>
            <div className="container">
                {
                    pokecards.map( (pokecard: IPokemon, key: number) => (
                            <div>
                                <PokeCard key={key} { ...pokecard } />
                                <br/>
                            </div>
                        )
                        
                    )
                }
            </div>
        </>
    );
}

export default PokemonList;