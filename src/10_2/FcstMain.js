import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import xy from './getxy.json';
import styles from './Fcst.module.css'

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
    const [hour, setHour] = useState() ;
    const [minute, setMinute] = useState() ;
    //const [code, setCode] = useState() ;
    const [area, setArea] = useState() ;
    const [x, setX] = useState() ;
    const [y, setY] = useState() ;

    

    //입력 값을 가져오기 위한 ref변수
    const txt1 = useRef();
    const sel1 = useRef();
    const selhr = useRef();
    const selmin = useRef();
    //dt가 변경되었을때 
    useEffect(()=>{        
        console.log(dt);
    }, [dt]) ;

    useEffect(()=>{        
        console.log(hour);
    }, [hour]) ;

    useEffect(()=>{        
        console.log(minute);
    }, [minute]) ;


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

const getHour = () => {
    let tmphr = selhr.current.value ;  
    if(tmphr < 10) tmphr = "0" + tmphr;
    setHour(tmphr);

}
const getMin = () => {
    let tmpmin = selmin.current.value ;
    setMinute(tmpmin);
}

const getSel = () => {
    let temp = xy.filter((item) => item["행정구역코드"] === parseInt(sel1.current.value))[0] ;
    console.log(temp);
    setArea(temp["1단계"]);
    setX(temp["격자 X"]);
    setY(temp["격자 Y"]);
}

//시간 선택
const hr= [];
  for(let i = 1; i <24; i=i+1) {    
    if (i < 10) 
    hr.push(  <option value={i}>0{i}</option>);  
    else hr.push(  <option value={i}>{i}</option>);  
  }
console.log("selhr", selhr, hr);


//분 선택
const min= [];
  for(let i = 1; i <24; i=i+1) {
    min.push(  <option value={i}>{i}</option>);  
  }

console.log("selmin", selmin, min);

  

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
    
    


    return(
        <article>
            {/* <header><h1>단기예보 정보 선택</h1></header> */}
            <div>
                <img src={require("../img/titleFcst.png")} />
            </div>
            <div className='grid'>
                <div>
                <input ref={txt1} type='date' id='dt' name='dt' onChange={() => getDt()}/>
                </div>

                <div className='grid'>
                    <select ref={selhr} onChange={() => getHour()}>
                        <option value=''>시</option> 시
                        {hr}
                    </select>
                    <select ref={selmin} onChange={() => getMin()}>
                        <option value=''>분</option> 분
                        <option value='00'>00</option>
                        <option value='30'>30</option>
                    </select>
                </div>

                <div>
                    <select ref={sel1} id='sel' name='sel' onChange={() => getSel()}>
                        <option value=''>지역 선택</option>
                        {ops}
                    </select>
                </div>
                
            </div>
            <footer>
                <div className="grid">
                    <Link to={`/ultra/${dt}/${hour}/${minute}/${area}/${x}/${y}`} role='button' onChange={() => {}} className="outline" id={styles.bt1}>초단기예보</Link>
                    <Link to={`/vilage/${dt}/${hour}/${minute}/${area}/${x}/${y}`} role='button' className="outline" id={styles.bt2}>단기예보</Link>
                </div>
            </footer>
        </article>
    );
}

export default FcstMain