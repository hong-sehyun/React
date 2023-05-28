import React, { useState, useEffect, useRef } from 'react';
import FcstTable from './FcstTable';
import { useParams } from 'react-router-dom';
import code from './getcode.json';
import styles from './Fcst.module.css';

const UltraSrtFcst = () => {
  console.log("useParams", useParams());
  const dt = useParams().dt;
  const hour = useParams().hour;
  const minute = useParams().minute;
  const x = useParams().x;
  const y = useParams().y;
  const area = useParams().city;
  //const ops = useParams().ops;


  //let {area} = useParams();
  //console.log("useParams",ops);

  const [datas, setDatas] = useState();
  const [dataTag, setDataTag] = useState();
  //const [opTags, setOpTags] = useState();


  useEffect(() => {
    console.log("useEffect", datas);
  }, [datas]);


  //예보구분 변수 받기
  let gubunurl = 'getUltraSrtFcst';
  let gubun = null;
  if (gubunurl === 'getUltraSrtFcst') {gubun = '초단기예보';}
  else {gubun = '단기예보';}

  useEffect(() => {
    let apikey = 'dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D';
    let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
    url = url + `${gubunurl}`;
    url = url + `?serviceKey=${apikey}`;
    url = url + `&numOfRows=100&pageNo=1`;
    url = url + `&base_date=${dt}&base_time=${hour}${minute}`;
    url = url + `&nx=${x}&ny=${y}`;
    url = url + '&dataType=json';
    console.log(url);

    //fetch는 비동기방식임 - 로딩 넣어도 됨
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setDatas(data.response.body.items.item))
      .catch((err) => console.log(err));


      //패치 되는 동안 수행
      /*
      let temp = code.filter(c => c.항목값 === k.category && c.예보구분 === gubun);
      temp = temp.map((i) => 
        <option value={i["항목값"]}>{i["항목명"]}{i["항목값"]}</option>
      );
      let newcate = temp[0].항목명; */
/*
      opTags(
        datas.map((k) => {
        ops =  code.filter(c => c.항목값 === k.category && c.예보구분 === gubun);
        let temp = temp.map((i) => 
          <option value={i["항목값"]}>{i["항목명"]}{i["항목값"]}</option>
        );

        }
        ));
  */    
        
  }, []);





  useEffect(() => {
    if (!datas) return;



  //중복값 제거
  //set 사용하기
  // const datas1 = [...new Set( datas.map(k => k.category) )]; << 배열 전체가 아닌 category만 찍힘

  //filter, findIndex 사용하기(성공!)
  const datas1 = datas.filter((y, i) => datas.findIndex(x=>x.category === y.category) === i);

  
  console.log("datas1", datas1);

  let skyobj = {'1':'☀', '2' : '⛅', '3' : '☁', '4' : '🌫'}
  let ptyobj = {'0':'없음', '1':'비', '2' : '비/눈', '3' : '눈', '4' : '소나기', '5':'빗방울', '6':'빗방울눈날림', '7':'눈날림'}
 
    setDataTag(  
      datas1.map((k, idx) => {
        //category코드 변환
        let temp = code.filter(c => c.항목값 === k.category && c.예보구분 === gubun);

        return (
          <tr className='trd' key={'trd' + idx}>
            <td >{temp[0].항목명}</td>
            <td>{k.fcstDate}</td>
            <td>{k.fcstTime}</td>
            <td>
            {(k.category === 'SKY') ? skyobj[k.fcstValue] 
              : (k.category === 'PTY') ? ptyobj[k.fcstValue]
              : k.fcstValue + temp[0].단위}
            </td>
          </tr>
        );
      }
       
      )

    );
  }, [datas, gubun]);




  return (
    <main className={styles.main}>
      <form>
      <article>
        <header>
          {/* <h1>{area}</h1> */}
          <h1>{area}</h1>
          <div className='grid'>
          <div><h1>{gubun}</h1></div>
          
          </div>
        </header>
        <table>
          <thead>
            {datas && <FcstTable datas={datas} gubun={gubun} />}
          </thead>
          <tbody>
            {dataTag}
          </tbody>
        </table>
      </article>
      </form>
    </main>
  )
}

export default UltraSrtFcst;