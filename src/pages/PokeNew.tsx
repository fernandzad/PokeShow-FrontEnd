import React from 'react';
import PokeCard from '../components/PokeCard';
import Title from '../components/Title';
import { useFormState } from '../hooks/useFormState';
import PokeForm from '../components/PokeForm';

const PokeNew: React.FC = () => {
    const title: string = 'Add new';
    const subtitle: string = 'Please enter the information of your new captured';
    const [values, setValues] = useFormState({
                                name: '', type: '',
                                number: '', weight: '',
                                height: '', evolution: ''
                            });

    return (
        <>
            <div className="container mx-auto padding-home">
                <div className="row">
                        <div className="text-left">
                            <Title title={title} subtitle={subtitle}/>
                        </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <PokeCard { ...values }/>
                    </div>
                    <div className="col-md-6">
                        <PokeForm form={values} onChange={setValues}/>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default PokeNew;