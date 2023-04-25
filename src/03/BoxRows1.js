import './Box.css';
import { useState } from 'react';
//const BoxRows = (probs) => {
const BoxRows1 = ({ mv }) => {
    //const mvl = [...probs.mv];
    //console.log("BoxRows", probs.mv)
    console.log("BoxRows1", mv)


    const [footTag, setFootTag] = useState(0);

    const showmv = (row) => {
        console.log(row);
        setFootTag(row.movieCd);
    }




    let trTags = [];

    for (let row of mv) {
        //console.log(row.rank, row.movieNm, row.salesAcc, row.rankInten)
        let ri;
        let rint = parseInt(row.rankInten);
        if (rint == 0) ri = '⏺';
        else if (rint > 0) ri = '🔼';
        else ri = '🔽';

        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showmv()}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{row.salesAcc}</td>
                <td>{ri} {row.rankInten}</td>
            </tr>
        );
    }

    /* tr이 10개이기 때문에 key값으로 구분을 해야됨 */

    return (
        <>
            <tbody>

                {trTags}

            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={4}> {footTag} </td>
                </tr>
            </tfoot>
        </>
    );

}
export default BoxRows1;