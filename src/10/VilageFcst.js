import React from 'react'
import FcstTable from './FcstTable'
import { useParams } from 'react-router-dom'

function VilageFcst() {
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