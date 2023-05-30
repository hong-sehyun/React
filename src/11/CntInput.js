import React from 'react'
import { Link } from 'react-router-dom'
import { CntAtoms } from './CntAtoms'
import { useRecoilState } from 'recoil'

function CntInput() {

    const [n, setN] = useRecoilState();

    const downN = (e) => {
        e.preventDefault();
        if (n - 1 < 0) setN(0);
        else setN(n - 1);
    }
    const upN = (e) => {
        e.preventDefault();
        if (n + 1 > 10) setN(10)
        else setN(n + 1);
    }
    return (
        <article>
            <form>

                <div className='grid'>
                    <div></div>
                    <div><button onClick={downN}>-</button></div>
                    <div><input type='text' id='txt1' readOnly></input></div>
                    <div><button onClick={upN}>+</button></div>
                </div>
            </form>
            <footer>
                <Link to='/disp'>출력화면 이동</Link>
            </footer>
        </article>
    )
}

export default CntInput