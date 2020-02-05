import React from 'react';
import IPokemon from '../interfaces/IPokemon'

interface IForm{
    form: IPokemon,
    onChange: () => {}
}

const PokeForm: React.FC<IForm> = ({form, onChange}) => {

    return (
        <>
            <div className="container">
                <form >

                    <div className="form-row">
                        <div className="col-5">
                            <input type="text"
                                className="form-control"
                                placeholder="name"
                                name="name"
                                onChange={onChange}
                                value={form.name}
                            />
                        </div>
                        
                        <div className="col-4">
                            <input type="text"
                                className="form-control"
                                placeholder="type"
                                name="type"
                                onChange={onChange}
                                value={form.type}
                            />
                        </div>
                        <div className="col-3">
                            <input type="text"
                                className="form-control"
                                placeholder="number"
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
                                placeholder="weight"
                                name="weight"
                                onChange={onChange}
                                value={form.weight}
                            />
                        </div>
                        <div className="col-4">
                            <input type="text"
                                className="form-control"
                                placeholder="weight"
                                name="height"
                                onChange={onChange}
                                value={form.height}
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