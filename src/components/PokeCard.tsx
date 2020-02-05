import React from 'react';
import IPokemon from '../interfaces/IPokemon';

const PokeCard: React.FC<IPokemon> = ({name, type, number, image}) => {
    // const {
    //     name,
    //     type,
    //     number,
    //     image
    // } = props;

    return (
        <>
            <div className="card text-center">
                
                <div className="card-body">
                    <h5 className="card-title">{name} #{number}</h5>
                    <img src={image} alt=""/>
                </div>
                <div className="card-footer text-muted">
                    {type}
                </div>
            </div>
        </>
    );
}

export default PokeCard