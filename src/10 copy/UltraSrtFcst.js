import React, { useState, useEffect } from 'react';
import FcstTable from './FcstTable';
import { useParams } from 'react-router-dom';

function UltraSrtFcst() {
console.log("useParams",useParams());
  const dt = useParams().dt;
  const x = useParams().x;
  const y = useParams().y;
  const area = useParams().area;


  const [datas, setDatas] = useState();

  useEffect(() => {
    console.log("useEffect", datas);
  }, [datas]);


  useEffect(() => {
    let apikey = 'dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D';

    let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
    url = url + 'getUltraSrtFcst';
    url = url + `?serviceKey=${apikey}`;
    url = url + `&numOfRows=60&pageNo=1`;
    url = url + `&base_date=${dt}&base_time=0600`;
    url = url + `&nx=${x}&ny=${y}`;
    url = url + '&dataType=json';
    console.log(url);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setDatas(data.response.body.items))
      .catch((err) => console.log(err));
  
  }, []);
  //datas = [...new Set(datas)];
 


  return (
    <main>
      <article>
        <header>{area}</header>

        {/* {items && <FcstTable content={items} />} */}
        {datas && <FcstTable datas={datas} gubun='초단기예보'/>}
        <table>
          <tbody>
          
          </tbody>
        </table>
      </article>
    </main>
  )
}

export default UltraSrtFcst;