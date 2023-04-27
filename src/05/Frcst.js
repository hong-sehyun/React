import data from './dataFrcst.json';
const Frcst = () => {
const dtkey = ['frcstOneDt', 'frcstTwoDt', 'frcstThreeDt','frcstFourDt'];
dtkey.map((item) => console.log(data(item)));

    return (
        <main className='container'>
            <article>
                <header>초미세먼지 주간예보</header>
            </article>
        </main>
    );
}

export default Frcst;