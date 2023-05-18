import React from 'react'
import { useParams } from 'react-router-dom'

const RoutePage1 = () => {
    const fruits = useParams().item ;
    const fruits2 = useParams().item2 ;

    
    return (
        <article>
            <header>RoutePage1</header>
            {fruits}
            {fruits2}

        </article>
    )
}

export default RoutePage1