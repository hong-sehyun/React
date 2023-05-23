import dataTaccident from './dataTaccident.json';
import TAccidentNav1 from './TAccidentNav1';
import TAccidentNav2 from './TAccidentNav2';
import TAccidentDetail from './TAccidentDetail';
import { useState, useEffect } from 'react';
import './TAccident.module.css';
const TAccident = () => {



    //문자열로 접근
    //console.log(data['data']); 
    //변수로 접근
    //console.log(dataTaccident.data); 


    const data = dataTaccident.data; //사고 건수 obj 배열(15개)

    let c1 = data.map((item) => item.사고유형_대분류);
    c1 = new Set(c1);
    c1 = [...c1] //...:하나씩 낱개로 흩어라는 뜻
    //console.log('c1', c1);
    //    let c2 = data.map((item, idx) => data.사고유형_대분류 = data.사고유형_중분류); <<틀림

    //1단계
    /*
     const c2 = [] ;
     for(let item of data) {
       let temp = [] ;
       temp.push(item.사고유형_대분류) ;
       temp.push(item.사고유형_중분류) ;
       c2.push(temp);  
     } */

    //2단계
    /*
   const c2 = [] ;
   for(let item of data) {
      let temp = [item.사고유형_대분류, item.사고유형_중분류] ;
      //temp.push(item.사고유형_대분류) ;
      //temp.push(item.사고유형_중분류) ;
      c2.push(temp);  
    } */

    const c2 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);
    //console.log('c2', c2);

    const [sel1, setSel1] = useState(0);
    const [sel2, setSel2] = useState([]);
    const [seld, setSeld] = useState([]);


    /*
    useEffect(() => {
        console.log('TAccident sel1 useEffect []',sel1);
    }, []);
*/
    useEffect(() => {
        console.log('TAccident sel1 useEffect sel1',sel1);
    }, [sel1]);

    useEffect(() => {
        console.log('TAccident sel2 useEffect se2',sel2);
        let temp = data.filter((item) => 
        item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1] ) ;
        setSeld(temp[0])
    }, [sel2, data]);

    
    useEffect(() => {
         console.log('TAccident seld useEffect seld',seld);
        
        // let temp = data.filter((k) => 
        // k.사고유형_대분류 === sel2[0] && k.사고유형_중분류 === sel2[1]);
        // setSeld(temp)
    }, [seld]);



    

    // const btTag = c3arr.map((item) => 
    // <div key={item}>
    //      {item[2]}
    // </div>
    // );

/*    
    useEffect(() => {
        console.log('TAccident sel1 useEffect',sel1);
    });
*/
    return (
        <main className='container'>
            <article>
                <header>
                    <TAccidentNav1 c1 = {c1} sel1 = {sel1} setSel1 = {setSel1} />
                    <TAccidentNav2 c2 = {c2} sel1 = {sel1} sel2 = {sel2} setSel1 = {setSel1} setSel2 = {setSel2} />
                    
                </header>
                {/* <detail c2 = {c2} sel1 = {sel1} sel2 = {sel2} seld = {seld} setSel1 = {setSel1} setSel2 = {setSel2} setSeld = {setSeld}></detail>  */}
            
                    {seld && <TAccidentDetail seld = {seld} />}
              
            </article>
        </main>

    );
}

export default TAccident;