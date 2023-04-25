import './Box.css';
//const BoxRows = (probs) => {
const BoxRows = ({ mv }) => {
    //const mvl = [...probs.mv];
    //console.log("BoxRows", probs.mv)
    console.log("BoxRows", mv)

    let trTags = [];
    
    for (let row of mv) {
        //console.log(row.rank, row.movieNm, row.salesAcc, row.rankInten)
        let ri;
        let rint = parseInt(row.rankInten);
        if(rint==0) ri = '⏺';
        else if (rint > 0) ri = '🔼';
        else ri = '🔽';

        trTags.push(
            <tr className="mytr" key={row.movieCd}>        
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
            {trTags}
        </>
    );

}
export default BoxRows;