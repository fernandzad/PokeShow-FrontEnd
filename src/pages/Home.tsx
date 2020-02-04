import React from 'react';
import Title from '../components/Title'
import PokemonList from '../components/PokemonList'
import '../components/styles/home.css'

const Home: React.FC = () => {
    const title: string = 'Bienvenido'
    const subtitle: string = 'Aquí podras encontrar todos tus pokémon :)'
    return (
        <>
            <div className="container mx-auto padding-home">
                <div className="text-left">
                    <Title title={title} subtitle={subtitle}/>
                </div>
                <div>
                    <PokemonList />
                </div>
            </div>
        </>
    )
}

export default Home