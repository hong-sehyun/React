import React from 'react'
import { Link } from 'react-router-dom';
import { CntAtoms, CntAtomsTwice } from './CntAtoms';
import { useRecoilState } from 'recoil';

const CntDisp = () => {    

    const n = useRecoilState(CntAtoms);
    const n2 = useRecoilState(CntAtomsTwice);
    return (
        <article>
            <h1>입력값 : {n}, 입력값 2배 :  {n2} </h1>
            <footer>
                <Link to='/'>입력화면 이동</Link>
            </footer>
        </article>
    );

}

export default CntDisp ;
