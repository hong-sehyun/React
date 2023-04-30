import data from './dataFrcst.json';
import './Frcst.css';
import { useState } from "react";


const Frcst = () => {
    const dtkey = ['frcstOneDt', 'frcstTwoDt', 'frcstThreeDt', 'frcstFourDt'];
    const cnkey = ['frcstOneCn', 'frcstTwoCn', 'frcstThreeCn', 'frcstFourCn'];
    //dtkey.map((item) => console.log(data(item)));
    //cnkey.map((item) => console.log(data[item]));

    const dtcn = [];
    dtkey.map((item, idx) =>
        dtcn[data[item]] = data[cnkey[idx]]
    );

     
    const [tempTag, setTempTag] = useState(' ');
    const [etcTag, setEtcTag] = useState();
    const detail = (item) => {
        let dtcnitem = dtcn[item].split(',');        
        dtcnitem = dtcnitem.map((item) => item.split(':'))
        dtcnitem = dtcnitem.map((item) => 
        <div key={item[0]} className='sp'>
            <span className='sp1'>{item[0]}</span>   
            {item[1].trim() === '낮음'?<span className='sp21'>{item[1]}</span>
                : item[1].trim() === '보통' ? <span className='sp22'>{item[1]}</span>
                    : <span className='sp23'>{item[1]}</span>}
{ /*            <span className='sp2'>{item[1]}</span>   */ }
        </div>
        )
  

        setEtcTag(item);
        setTempTag(dtcnitem);
        

    }




    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item) =>
        <div className={etcTag === item ? 'dt1' : 'dt'}
            key={item}
            onClick={() => detail(item)}>
            {item}
        </div>
    );



    return (
        <main className='container'>
            <article>
                <header>
                    <h1>초미세먼지 주간예보</h1>

                    <div className='grid'>
                        {dtTag}
                    </div>
                </header>
                <div className='grid'>
                {tempTag}
                </div>
               
            </article>
        </main>
    );
}

export default Frcst;