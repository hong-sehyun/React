import './Box.module.css';
import { useState } from 'react';
//const BoxRows = (probs) => {
const BoxRows1 = ({ mv }) => {
    //const mvl = [...probs.mv];
    //console.log("BoxRows", probs.mv)
    //console.log("BoxRows1", mv)

    /*
        const [footTag, setFootTag] = useState(0);
        //클릭된 자료 확인
        const showmv = (row) => {
            console.log(row);
            setFootTag(row.movieNm , row.movieCd);
        }
    */
    const [detail, setDetail] = useState([1, 2, 3]);
    //state 변수에 배열 추가 가능

    const [footTag, setFootTag] = useState('영화를 선택하세요');
    // const [footCd, setFootCd] = useState(0);
    const showmv = (row) => {
        console.log(row);
        //    setFootToday(row.Date(tody));
        //    let tempTag = `[${row.movieCd}] ${row.movieNm} 개봉일 : ${row.openDt}` ;
        let tempTag =
            <tr>
                <td className='tmpsp'>
                    [{row.movieCd}]</td>
                <td className='tmpsp'>
                    {row.movieNm}
                </td>
                <td className='tmpsp' colSpan='2'>
                    개봉일 : {row.openDt}
                </td>
            </tr>
        setFootTag(tempTag);

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
            <tr className="mytr" key={row.movieCd} onClick={() => showmv(row)}>
                <td className='tdc'>{row.rank}</td>
                <td className='tdc'>{row.movieNm}</td>
                <td className='tdc'>{parseInt(row.salesAmt).toLocaleString()}</td>
                {/* <td>{rint === 0? '':ri} {rint === 0? '': Math.abs(rint)}</td> */}
                <td className='tdc'>{ri} {row.rankInten}</td>
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

                    {/* <td colSpan='4'> 합계 {footTag} </td> */}
                    <td colSpan='4' className='tdc' >{footTag} </td>
                </tr>
            </tfoot>
        </>
    );

}
export default BoxRows1;