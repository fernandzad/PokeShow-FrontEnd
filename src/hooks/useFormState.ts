import { useState, FormEvent } from 'react';

export const useFormState = (initialValues: any) => {
    const [values, setValues] = useState(initialValues);

    return [ values, (e: FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        setValues({
            ...values,
            [target.name]: target.value
        });

    }];
}

