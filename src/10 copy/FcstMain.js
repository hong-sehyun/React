import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import styles from './Fcst.module.css';
import xy from './getxy.json';

function FcstMain() {
    //지역선택
    const ops = xy.map((item) =>
        <option value={item["행정구역코드"]} key={item["행정구역코드"]} >
            {item["1단계"]}
        </option>
    ) ;
    console.log(xy)

    //state 변수
    const [dt, setDt] = useState() ;
    //const [code, setCode] = useState() ;
    const [area, setArea] = useState() ;
    const [x, setX] = useState() ;
    const [y, setY] = useState() ;

    //입력 값을 가져오기 위한 ref변수
    const txt1 = useRef();
    const sel1 = useRef();


    //dt가 변경되었을때 
    useEffect(()=>{        
        console.log(dt);
    }, [dt]) ;

    //데이터 받아오기
    //http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?
    //serviceKey=dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D
    //&numOfRows=900&pageNo=1&base_date=20230517&base_time=0600&nx=55&ny=127&dataType=json
    //초단기예보 ultra row 60개
    //단기예보 Vilage row 900개 오늘 기준 3일


  //입력 이벤트
  const getDt = () => {
    let tdt = txt1.current.value ;
    tdt = tdt.replaceAll('-', '') ;
    
    setDt(tdt);
}

const getSel = () => {
    let temp = xy.filter((item) => item["행정구역코드"] === parseInt(sel1.current.value))[0] ;
    console.log(temp);
    setArea(temp["1단계"]);
    setX(temp["격자 X"]);
    setY(temp["격자 Y"]);
}



/*    
   const getUtDt = (dt, x, y) => {
        let apikey = 'dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D';

        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
        url = url + `${utvi}`;
        url = url + `?serviceKey=${apikey}`;
        url = url + `&numOfRows=900&pageNo=1`;
        url = url + '&base_date='+getDay+'&base_time=0600';
        url = url + `&nx=${x}&ny=${y}`;
        url = url + '&_type=json';
        console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err))
    }
*/    
//console.log("area", area);   
    


    return(
        <main className={styles.main}>
        <article className={styles.article}>
            <div className="container" id={styles.timage}>
                <img src={require("../img/titleFcst.png")} />
            </div>
            {/* <header><h1>단기예보 정보 선택</h1></header> */}
            <div className='grid'>
                <div>
                <input ref={txt1} type='date' id='dt' name='dt' onChange={() => getDt()}/>
                </div>
                <div>
                <select ref={sel1} id='sel' name='sel' onChange={() => getSel()}>
                    <option value=''>선택</option>
                    {ops}
                </select>
                </div>
            </div>
            <footer>
                <div className="grid">
                    <Link to={`/ultra/${dt}/${area}/${x}/${y}`} role='button' className="outline" id={styles.bt1} onChange={() => {}}>초단기예보</Link>
                    <Link to={`/vilage/${dt}/${area}/${x}/${y}`} role='button' className="outline" id={styles.bt2}>단기예보</Link>
                </div>
            </footer>
        </article>
        </main>
    );
}

export default FcstMain