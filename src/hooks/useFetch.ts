import { useState, useEffect } from 'react';
import IPokemon from '../interfaces/IPokemon';

const useFetch = (url: string) => {
    const [ pokecards, setPokeCards ] = useState<IPokemon[]>([]);

    useEffect( () => {
        const fetchResources = async () => {
            try {
                let response: Response = await fetch(url);
                let data = await response.json();
                console.log(data);
                setPokeCards(data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchResources();
    }, [url])

    return { pokecards };
}

export default useFetch;