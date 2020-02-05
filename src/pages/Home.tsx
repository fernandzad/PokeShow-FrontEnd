import React from 'react';
import Title from '../components/Title';
import PokemonList from '../components/PokemonList';
import Add from '../components/Add';
import '../components/styles/home.css';

const Home: React.FC = () => {
    const title: string = 'Welcome'
    const subtitle: string = 'Here you cand find all your Pokémon :D'
    return (
        <>
            <div className="container mx-auto padding-home">
                <div className="text-left">
                    <Title title={title} subtitle={subtitle}/>
                </div>
                <div>
                    <PokemonList />
                </div>
                <div>
                    <Add />
                </div>
            </div>

        </>
    )
}

export default Home