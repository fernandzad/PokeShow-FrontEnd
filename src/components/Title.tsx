import React from 'react'

interface Props{
    title: string;
    subtitle: string;
}

const Title: React.FC<Props> = ({title, subtitle}) => {
    return (
        <>
            <div>
                <h1 className="display-4">{ title }</h1>
            </div>
            <div>
                <p className="lead text-mute">
                    { subtitle }
                </p>
            </div>
        </>
    );
}

export default Title