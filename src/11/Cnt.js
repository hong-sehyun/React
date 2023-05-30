import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { useState, useEffect } from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";
const Cnt = () => {
    const [n, setN] = useState(1);

    useEffect(() => {
        console.log("n", n);
    }, [n]);

    return (
        <BrowserRouter>
            <main className="container">
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<CntInput />} />
                        <Route path="/disp" element={<CntDisp />} />
{/*                     <CntInput n={n} setN={setN} /> */}
{/*                        <CntDisp n={n} /> */}
                    </Routes>
                </RecoilRoot>
            </main>
        </BrowserRouter>

    );
}

export default Cnt;