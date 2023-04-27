import { useState } from "react";

const MyClockTime1 = () => {
    let t = new Date().toLocaleTimeString();
    const [myTime, setMyTime] = useState(t);
   //let cnt = 0;
 //   setTimeout(console.log(++cnt),1000);

 //1초에 한번씩 state변수 변경
    setInterval(() => setMyTime(new Date().toLocaleTimeString()), 1000);
    
    return (
        <footer>
            <h1><span>{t}</span></h1>
        </footer>
    );
}

export default MyClockTime1;