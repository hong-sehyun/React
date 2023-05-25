import React, { useState, useEffect } from 'react';
import FcstTable from './FcstTable';
import { useParams } from 'react-router-dom';
import code from './getcode.json';

function UltraSrtFcst() {
console.log("useParams",useParams());
  const dt = useParams().dt;
  const x = useParams().x;
  const y = useParams().y;
  const area = useParams().area;


  const [datas, setDatas] = useState();
  const [dataTag, setDataTag] = useState();

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
 
  useEffect(()=>{

    if (!datas) return; 

    console.log("datas", datas);
    //8개 나오도록
    // i : Object, n : index 
    // map에서 변수 2개 들어가면 뒤가 index
    // let temp = datas.map((i,n) =>
    //     //console.log(`i=${i} n=${n}`)
    //     <div className="w2div" key={"w2div" + n}>
    //         <span className="sp0">{code[i.category][0]}</span>
    //         <span className="sp1">{i.obsrValue}</span>
    //         <span className="sp2">{code[i.category][1]}</span>
    //     </div>
    // );
    // setDataTag(temp);

    
    //temp 없이 setDataTag에 바로 넣어도 됨
    setDataTag(
      datas.map((i) =>
        <tr>
            <td>{i.category}</td>
            <td>{i.obsrValue}</td>
            <td>{i.category}</td>
        </tr>
    ));
    
}, [datas]);




  return (
    <main>
      <article>
        <header>{area}</header>

        {/* {items && <FcstTable content={items} />} */}
        {datas && <FcstTable datas={datas} gubun='초단기예보'/>}
        {dataTag}
        <table>
          <tbody>
          
          </tbody>
        </table>
      </article>
    </main>
  )
}

export default UltraSrtFcst;