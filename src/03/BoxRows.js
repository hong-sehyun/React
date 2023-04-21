//const BoxRows = (probs) => {
const BoxRows = ({ mv }) => {
    //const mvl = [...probs.mv];
    //console.log("BoxRows", probs.mv)
    console.log("BoxRows", mv)

    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAcc, row.rankInten)
        trTags.push(
            <tr>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{row.salesAcc}</td>
                <td>{row.rankInten}</td>
            </tr>
            );
    }



    return (
        <>
            {trTags}
        </>
    );

}
export default BoxRows;