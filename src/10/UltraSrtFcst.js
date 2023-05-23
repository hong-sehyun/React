import React, { useState, useEffect, useRef } from 'react';
import FcstTable from './FcstTable';
import { useParams } from 'react-router-dom';
import xy from './getxy.json';

function UltraSrtFcst({item}) {

  const dt = useParams().dt;
  const x = useParams().x;
  const y = useParams().y;
  const area = useParams().area;


  // let wtbl = [];

  // for (let row = 0; row < 60; row = row + 1) {
  //   wtbl.push(
  //     <tr>
  //       <td>{row.category}</td>
  //       <td>{row.fcstDate}</td>
  //       <td>{row.fcstTime}</td>
  //       <td>{row.fcstValue}</td>
  //     </tr>
  //   );
  // }




  const [items, setItems] = useState();
  // const [items2, setItems2] = useState();


  useEffect(() => {
    console.log("useEffect", items);
  }, [items]);


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
      .then((data) => setItems(data.response.body.items.item))
      .catch((err) => console.log(err));

  }, []);

  /*
  const categ = ['category', 'fcstDate', 'fcstTime', 'fcstValue'];

  let list1 = categ.map((item) =>
        <tr>
          <td>{getSel[item]}</td>            
        </tr>
  );
*/



  // const categ = ['category', 'fcstDate', 'fcstTime', 'fcstValue'];
  // const list1 = categ.filter((item) => item[0] === dt);
  // console.log("carr", list1);
  // const tags = list1.map((item) =>
  //   <tr>
  //     <td>{item[1]}</td>
  //   </tr>
  // );


  // const list1 = xy.filter((item) => item["fcstDate"] === parseInt(dt));



  return (
    <main>
      <article>
        <header>UltraSrtFcst</header>

        {/* {items && <FcstTable content={items} />} */}
        {item && <FcstTable row={item}/>}
        <table>
          <tbody>
            {/* {list1.map((item) => (
              <tr>
                <td>{item.category}</td>
                <td>{item.fcstDate}</td>
                <td>{item.fcstTime}</td>
                <td>{item.fcstValue}</td>
              </tr>
            ))} */}
            {/* {tags} */}
          </tbody>
        </table>
      </article>
    </main>
  )
}

export default UltraSrtFcst;