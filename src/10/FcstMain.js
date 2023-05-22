import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import xy from './getxy.json';

function FcstMain() {

    const [sel2, setSel2] = useState([]);
    const [seld, setSeld] = useState([]);

    //지역선택
    const ops = xy.map((item) => 
    <option value={"행정구역코드"} key={item["행정구역코드"]}>{item["1단계"]}</option>
    );

    //지역 선택 후 단기 초단기 선택
    useEffect(() => {

    }, [sel1]);

    useEffect(() => {
        let temp = xy.filter((item) => 
        item["1단계"] === sel2[0] && item["격자 X"] === sel2[1] && item["격자 y"] === sel2[2] ) ;
        setSeld(temp[0])
    }, [sel2, data]);
    

    //데이터 받아오기
    //http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?
    //serviceKey=dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D
    //&numOfRows=900&pageNo=1&base_date=20230517&base_time=0600&nx=55&ny=127&dataType=json
    //초단기예보 ultra row 60개
    //단기예보 Vilage row 900개 오늘 기준 3일
    
    
    const dt = useRef();
    bdate = dt.current.value.replaceAll('-', '');
    const getData = (bdate, nx, ny) => {
        let apikey = 'dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D';

        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
        url = url + `serviceKey=${apikey}`;
        url = url + `&numOfRows=900&pageNo=1`;
        url = url + `&base_date=${bdate}&base_time=0600`;
        url = url + `&nx=${nx}&ny=${ny}`;
        url = url + '&_type=json';
        console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err))

    }

    return (
        <article>
            <header>
                <h1>단기예보 정보 선택</h1>
            </header>
            <div className='grid'>
                <input type="date" id="date" name="date" />
                <div>
                    <select id="fruit" required>
                        <option value="" selected>지역 선택</option>
                        {ops}
                    </select>
                </div>
            </div>
            <footer className='grid'>
                <button><Link to='/ultra' role='button'>초단기 예보</Link></button>
                <button><Link to='/vilage' role='button'>단기 예보</Link></button>
            </footer>

        </article>
    )
}

export default FcstMain