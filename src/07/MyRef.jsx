import { useState, useRef, useEffect } from "react";

const MyRef = () => {
    const txtref = useRef();
    const itemarr = useRef([]);
    const [itemTag, setItemTag] = useState();

    //페이지 로딩 즉시 입력창을 깜빡거리게 하는 법
    useEffect(() => {
        txtref.current.focus();
    }, []);

    

    const additem = (e) => {
        e.preventDefault();
        itemarr.current = [...itemarr.current, itemarr.current.values]
        console.log("add", itemarr.current);
    }

    const rstitem = () => {
        console.log("rst");
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
                <div className="grid">
                    
                </div>
            </article>
        </main>
    );
}


export default MyRef;