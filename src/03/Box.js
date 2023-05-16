import BoxRows from "./BoxRows1";
import style from './Box.module.css';
import { useRef, useState, useEffect } from "react";
const Box = () => {

    const [mvl, setMvl] = useState();
    let seldt;

    useEffect(() => {
        //어제 날짜 만들기
        //https://ko.javascript.info/date
        let yesterday = new Date() ;
        yesterday.setDate(yesterday.getDate() -1);

        seldt = yesterday.getFullYear();
        let month = yesterday.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        //seldt = `${seldt}${yesterday.getMonth() + 1}`; //0부터 시작하기 때문에 1더해야됨
        let day = yesterday.getDate();
        day = day < 10 ? `0${day}` : day;

        seldt = `${seldt}${month}`;
        seldt = `${seldt}${day}`;

        //seldt = `${seldt}${yesterday.getDate()}`;
        console.log(seldt);
        dt1.current.value = `${yesterday.getFullYear()}-${month}-${day}`;
        getData(seldt);
    },[])
    


    //날짜 입력창
    const dt1 = useRef();

    //날짜 선택
    const getDt = () => {

        //console.log("dt1 =", dt1.current.value);
        seldt = dt1.current.value.replaceAll('-', '');
        console.log("dt1 =", seldt);
        //getDt(seldt);

        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + seldt;

        console.log(url);

        fetch (url)
        .then((resp) => resp.json())
        .then((data) => setMvl(data.boxOfficeResult.dailyBoxOfficeList))
        .catch((err) => console.log(err))

    }

    //
    const getData = (sd) => {
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + sd;

        console.log(url);

    }


    return (
        <main className="cotainer">
            <article>
                <header>
                    <nav>
                        <ul><li className={style.h1}>일일 박스오피스</li></ul>
                        <ul><li><input ref={dt1} type="date" id="dt1" name="dt1" onChange={() => getDt()}/></li></ul>
                    </nav>
                    {/* <h1>일일 박스오피스</h1>
                    <input type="date" id="dt1" name="dt1" /> */}
                </header>
                <table role="grid">
                    <thead>
                        <tr>
                            <th scope="col" className={style.a}>순위</th>
                            <th scope="col" className={style.a}>영화명</th>
                            <th scope="col" className={style.a}>매출액</th>
                            <th scope="col" className={style.a}>증감</th>
                        </tr>
                    </thead>
                        {mvl && <BoxRows mv={mvl} /> }                
                </table>
            </article>
        </main>
    );

}
export default Box;