import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import VilageFcst from './VilageFcst';
import UltraSrtFcst from './UltraSrtFcst';
import FcstNav from './FcstNav';
import FcstMain from './FcstMain';

const Fcst = () => {


    return (
        <BrowserRouter>
            <main className='container'>
                <FcstNav />
                <Routes>
                    <Route path='/' element={<FcstMain />} />
                    <Route path='/vilage' element={<VilageFcst />} />
                    <Route path='/ultra' element={<UltraSrtFcst />} />
                </Routes>
            </main>

        </BrowserRouter>




    )
}

export default Fcst