import React from 'react'

function Fcst() {


    return (

        <main className='container'>

            <div className='grid'>
                <div><h3>기상청 단기예보</h3></div>
                <div>
                <button>Button</button>
                </div>
            </div>
            <article>
                <header>
                    <h1>단기예보 선택</h1>
                </header>
                <div className='grid'>
                    
                        <input type="date" id="date" name="date" />

                    <div>

                        <select id="fruit" required>
                            <option value="" selected>선택</option>
                            {/*<option>…</option>*/}
                        </select>
                    </div>
                </div>
            </article>

        </main>
    )
}

export default Fcst