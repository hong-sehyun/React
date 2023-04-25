//전역으로 적용
//import './MyDiv.css'
//컨퍼넌트에 적용
import style from './MyDiv.module.css'

//state사용 1단계
import { useState } from 'react';


const MyDivArticle = ({aname}) => {

    //const aname = probs.aname ;
let n = aname === undefined ?  '0' : aname.slice(-1)  ;
//let cnt =0;

//state사용 2단계 변수 선언
const[cnt, setCnt] = useState(0);


//click 이벤트 처리
const like = (n)=>{
//    cnt= cnt+n; 
//state사용 3단계 변수 내용 변경
setCnt(cnt+1);

    console.log(cnt)
}



console.log(n);
return (
    <article>
        <header><h1 className={style.mah1}>{ aname || "MyDiv0"}</h1></header>
        <ul className={style.aul}>
            <li className={style.ali}>{n == '0' ? 'MyDiv0' : 'MyDiv'+n}1</li>
            <li className={style.ali}>{'MyDiv'+n}2</li>
        </ul>
        {n ==='1' &&
        <footer><h2><span onClick={()=>like()}>❤</span> {cnt}</h2></footer>
        }
        
    </article>
);



}

export default MyDivArticle;