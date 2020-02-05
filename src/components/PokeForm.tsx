import React, { FormEvent, useState } from 'react';
import IPokemon from '../interfaces/IPokemon';
import { useHistory } from 'react-router-dom';
import Loader from '../components/Loader';

interface IForm{
    form: IPokemon,
    onChange: () => {}
}

const PokeForm: React.FC<IForm> = ({form, onChange}) => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e: FormEvent<EventTarget>) => {
        setLoading(true);
        e.preventDefault();

        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(form)
            }
            let response = await fetch(`${process.env.REACT_APP_API_URL}`, config);
            let json = await response.json();

            console.log(json);

            setLoading(false);
            
            //Gracias a React Router
            history.push('/');

        } catch (error) {
            setLoading(false);
            console.log(error.message);
        }
    }

    if(loading)
        return <Loader />

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col-5">
                            <input type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                onChange={onChange}
                                value={form.name}
                            />
                        </div>
                        
                        <div className="col-4">
                            <input type="text"
                                className="form-control"
                                placeholder="Type"
                                name="type"
                                onChange={onChange}
                                value={form.type}
                            />
                        </div>
                        <div className="col-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Number"
                                name="number"
                                onChange={onChange}
                                value={form.number}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="form-row">
                        <div className="col-4">
                            <input type="text"
                                className="form-control"
                                placeholder="Weight"
                                name="weight"
                                onChange={onChange}
                                value={form.weight}
                            />
                        </div>
                        <div className="col-4">
                            <input type="text"
                                className="form-control"
                                placeholder="Height"
                                name="height"
                                onChange={onChange}
                                value={form.height}
                            />
                        </div>
                        <div className="col-4">
                            <input type="text"
                                className="form-control"
                                placeholder="Evolution"
                                name="evolution"
                                onChange={onChange}
                                value={form.evolution}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="form-row">
                        <div className="col">
                            <input type="text"
                                className="form-control"
                                placeholder="Please enter the URL og the image"
                                name="image"
                                onChange={onChange}
                                value={form.image}
                            />
                        </div>
                        
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit"
                                className="btn btn-primary" 
                        >
                            Save
                        </button>
                    </div>
                    
                </form>
            </div>
        </>
    );
}

export default PokeForm