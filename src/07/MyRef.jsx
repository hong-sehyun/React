import { useState, useRef, useEffect } from "react";
import style from './MyRef.module.css';

const MyRef = () => {
    const txtref = useRef();
    const itemarr = useRef([]);
    const [itemTag, setItemTag] = useState();

    //페이지 로딩 즉시 입력창을 깜빡거리게 하는 법
    useEffect(() => {
        txtref.current.focus();
    }, []); //대괄호 : 맨처음 한번만 실행됨 



    const additem = (e) => {
        e.preventDefault();
        itemarr.current = [...itemarr.current, txtref.current.value];
        //itemarr.current = [...new Set(itemarr.current)];
        itemarr.current = [...itemarr.current];


        let tempTag = itemarr.current.map((item, idx) => <span key={'sp'+idx} className={style.sp}>{item}</span>);
        setItemTag(tempTag);
        console.log("add", itemarr.current);
        rstitem();
    }

    const rstitem = () => {
        txtref.current.value = '';
        txtref.current.focus();

        console.log("rstitem");
    }

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor='txt1'>과일 채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" className="txt1" required />
                            </div>
                            <div>
                                <button onClick={(e) => additem(e)}>등록</button>
                                <button onClick={(e) => rstitem(e)}>취소</button>
                            </div>
                        </div>
                    </form>
             
                </header>
                <div>
                    {itemTag}
                </div>
            </article>
        </main>
    );
}


export default MyRef;