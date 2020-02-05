import { useState, useEffect } from 'react';
import IPokemon from '../interfaces/IPokemon';

const useFetch = (url: string) => {
    const [ pokecards, setPokeCards ] = useState<IPokemon[]>([]);
    const [ loading, setLoading ] = useState(true);

    useEffect( () => {
        const fetchResources = async () => {
            try {

                let response: Response = await fetch(url);
                let data = await response.json();
                await new Promise((resolve, reject) => setTimeout(resolve, 2000));
                
                console.log(data);
                setPokeCards(data);

                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchResources();
    }, [url])

    return { pokecards, loading };
}

export default useFetch;