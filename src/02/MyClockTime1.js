import { useState } from "react";

const MyClockTime1 = () => {
    let t = new Date().toLocaleTimeString();
    const [myTime, setMyTime] = useState(t);
    let cnt = 0;
    setTimeout(console.log(++cnt),1000);
//    let myTime = new Date().toLocaleTimeString();
    return (
        <footer>
            <h1><span >{myTime}</span></h1>
        </footer>
    );
}

export default MyClockTime1;