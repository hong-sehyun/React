import React, { useState, useEffect } from 'react';
import FcstTable from './FcstTable'
import { useParams } from 'react-router-dom'
import code from './getcode.json';
import styles from './Fcst.module.css';

const VilageFcst = () => {
  console.log("useParams", useParams());
  const dt = useParams().dt;
  const hour = useParams().hour;
  const minute = useParams().minute;
  const x = useParams().x;
  const y = useParams().y;
  const area = useParams().area;


  console.log("area", area);
  const [datas, setDatas] = useState();
  const [dataTag, setDataTag] = useState();

  useEffect(() => {
    console.log("useEffect", datas);
  }, [datas]);


  //예보구분 변수 받기
  let gubunurl = 'getVilageFcst';
  let gubun = null;
  if (gubunurl === 'getUltraSrtFcst') {gubun = '초단기예보';}
  else {gubun = '단기예보';}

  useEffect(() => {
    let apikey = 'dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D';
    let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
    url = url + `${gubunurl}`;
    url = url + `?serviceKey=${apikey}`;
    url = url + `&numOfRows=900&pageNo=1`;
    url = url + `&base_date=${dt}&base_time=${hour}${minute}`;
    url = url + `&nx=${x}&ny=${y}`;
    url = url + '&dataType=json';
    console.log(url);

    //let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${gubunurl}?serviceKey=dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D&numOfRows=10&pageNo=1&base_date=20230524&base_time=0500&nx=55&ny=127&dataType=json`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setDatas(data.response.body.items.item))
      .catch((err) => console.log(err));

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

  //시간 옵션 태그 만들기!!!
  //일 최고기온 최저기온은 시간이 정해져 있어서 통째로 함수를 만들면 안됨
  //일 최고 최저 기온만 footer에 깔기??
 
    setDataTag(

      
      datas1.map((k, idx) => {
        //category코드 변환
        let temp = code.filter(c => c.항목값 === k.category && c.예보구분 === gubun);

        return (
        <tr className='trd' key={'trd' + idx}>
          <td >{temp[0].항목명}</td>
          <td>{k.fcstDate}</td>
          {/* <td>{k.fcstTime}</td> */}
          <td>{hour}시{minute}분</td>
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
      <article>
        <header>
        {/* <h1>{area}</h1> */}
        <h2 className={styles.gubun}>{gubun}</h2>
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
    </main>
  )
}


export default VilageFcst