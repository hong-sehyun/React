import { useEffect } from "react";

const ex01 = () => {

//   useEfferct : defendency가 없을 경우
    useEffect(() => {
        console.log('defendency가 없을 경우', pn);
    }, [pn]);

    return (
        <>
        </>
    );

}

export default ex01;