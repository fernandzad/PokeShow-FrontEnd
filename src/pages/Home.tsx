import React from 'react';
import Title from '../components/Title'
import PokemonList from '../components/PokemonList'
import Add from '../components/Add'
import '../components/styles/home.css'

const Home: React.FC = () => {
    const title: string = 'Welcome'
    const subtitle: string = 'Here you cand find all your Pokémon :D'
    return (
        <>
            <div className="container mx-auto padding-home">
                <div className="row">
                    <div className="col-md 6">
                        <div className="text-left">
                            <Title title={title} subtitle={subtitle}/>
                        </div>
                    </div>
                    <div className="col-md 6">
                         <Add/>
                    </div>
                </div>
                <div>
                    <PokemonList />
                </div>
            </div>

        </>
    )
}

export default Home