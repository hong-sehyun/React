import TAccident from "./TAccident";
const TAccidentNav2 = ({ c2, sel1, sel2, setSel2 }) => {
    //console.log(c2)
    // const show = (item) => {
    // console.log(item);
    // }

    const c2arr = c2.filter((item) => item[0] === sel1);
     const btTag = c2arr.map((item) =>
     <li key={item}>
         <button onClick={() => setSel2(item)}>{item[1]}</button>
     </li>
     );

   


    //console.log(c2arr);


    return (

        <nav>
            <ul>
                <h1>사고유형 중분류</h1>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>

    );
}

export default TAccidentNav2;