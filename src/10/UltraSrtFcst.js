import React, { useState, useEffect, useRef } from 'react'
import FcstTable from './FcstTable'
import { useParams } from 'react-router-dom'

function UltraSrtFcst() {

  const dt = useParams().dt;
  const x = useParams().x;
  const y = useParams().y;
  const area = useParams().area;
  const getSel = useParams().getSel;
  const txt1 = useParams().txt1;
  const sel1 = useParams().sel1;

  let wtbl = [];

  console.log("UtTbl", getSel);

  for (let row of wtbl) {
    wtbl.push(
      <tr>
        <td>{row.category}</td>
        <td>{row.fcstDate}</td>
        <td>{row.fcstTime}</td>
        <td>{row.fcstValue}</td>
      </tr>
    );
  }



  const [items, setItems] = useState();

// getsel area, x, y

/*
  useEffect(() => {
    console.log("useEffect", items);
  }, [items]);
*/


  const getUtDt = (dt, x, y) => {
    let apikey = 'dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D';

    let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
    url = url + 'getUltraSrtFcst';
    url = url + `?serviceKey=${apikey}`;
    url = url + `&numOfRows=900&pageNo=1`;
    url = url + `&base_date=${dt}&base_time=0600`;
    url = url + `&nx=${x}&ny=${y}`;
    url = url + '&_type=json';
    console.log(url);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setItems(data.response.body.items.item))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    console.log("useEffect url", getUtDt);
    getUtDt(dt, x, y);
  }, [items]);

  /*
  const tagkey = ['category', 'fcstDate', 'fcstTime', 'fcstValue'];

  let tags = tagkey.map((k, idx) =>
        <div key={'k' + idx} >
            {k} {getSel[k] }
        </div>
  );
*/

  return (
    <main>
      <article>
        <header>UltraSrtFcst</header>
        <div>
          <FcstTable />
          {getUtDt}
        </div>
      </article>

    </main>
  )
}

export default UltraSrtFcst;