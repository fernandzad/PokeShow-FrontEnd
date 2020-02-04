import React, { useState } from 'react'
import './styles/errors.css'

interface Props{
    name: string;
    ok?: boolean;
    handleChange?: (event: React.FormEvent<HTMLHeadingElement>) => void;
}

interface TextNode{
    text: string
}

const Prueba: React.FC<Props> = ({name, handleChange}) => {
    const [count, countState] = useState<TextNode>({text: 'SomeText'})
    //countState({text: 'Adorable'}) 

    return (
        <> 
            <div className="row"> 
                <div className="col-md-5">
                    <h1 onChange={handleChange}>Hola {name} desde mi componente de Prueba </h1>
                </div>
                <div className="col-md-7">
                    <div className="text-center">
                        <h1 className="Error_Text">Error: 404 Not Found</h1>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export default Prueba