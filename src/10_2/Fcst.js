import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import VilageFcst from './VilageFcst';
import UltraSrtFcst from './UltraSrtFcst';
import FcstNav from './FcstNav';
import FcstMain from './FcstMain';
                        import styles from './Fcst.module.css';

const Fcst = () => {
    return (
        <BrowserRouter>
            <main className='container'>
                <FcstNav />
                <Routes>
                    <Route path='/' element={<FcstMain />} />
                    <Route path='/ultra/:dt/:city/:x/:y' element={<UltraSrtFcst />} />
                    <Route path='/vilage/:dt/:city/:x/:y' element={<VilageFcst />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
export default Fcst