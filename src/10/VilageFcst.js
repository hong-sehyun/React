import React from 'react'
import FcstTable from './FcstTable'
import { useParams } from 'react-router-dom'

function VilageFcst() {

    // const dt = useParams().dt;
    // const x = useParams().x;
    // const y = useParams().y;
    // const area = useParams().area;
    
    // const [items, setItems] = useState();

    return (
        <main>
            <article>
                <header>VilageFcst</header>
                <div>
                    <FcstTable />
                </div>
            </article>

        </main>

    )
}

export default VilageFcst