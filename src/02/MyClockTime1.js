import { useState } from "react";

const MyClockTime1 = () => {
    let t = new Date().toLocaleTimeString();
    const [myTime, setMyTime] = useState(t);
   //let cnt = 0;
 //   setTimeout(console.log(++cnt),1000);
    setInterval(() => setMyTime(new Date().toLocaleTimeString()), 1000);
    return (
        <footer>
            <h1><span>{t}</span></h1>
        </footer>
    );
}

export default MyClockTime1;