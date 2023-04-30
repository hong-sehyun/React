import { useState, useEffect } from "react";

const Counter = () => {

    const[count, setCount] = useState(0);
    useEffect(() => {
        document.title = `총 ${count}번 클릭하였습니다`;
    });
    
    return(
        <div>
            <h1>총 {count}번 클릭하였습니다</h1>
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </div>
    );

}

export default Counter;