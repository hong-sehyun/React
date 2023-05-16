/*
한국관광공사_관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/
import { useState, useEffect, useRef } from 'react';
import style from './Gallery.module.css';
import GalleryView from './GalleryView';

const Gallery = () => {

    const txt1 = useRef();

    //state 변수
    const [items, setItems] = useState();


    // 컴포넌트가 처음 랜더링 되었을때 한번 실행
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //
    useEffect(() => {
        console.log("useEffect", items);
    }, [items]);

    const getData = (kw) => {
        let apikey = 'dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D';
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        url = url + `serviceKey=${apikey}`;
        url = url + '&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A';
        url = url + `&keyword=${kw}`;
        url = url + '&_type=json';
        console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err))

    }

    //확인버튼
    const show = (e) => {

        e.preventDefault();

        if (txt1.current.value === '') {
            alert("키워드를 입력해주세요.")
            txt1.current.focus();
        }
        const kw = encodeURI(txt1.current.value);
        getData(kw);

    }

    //취소버튼
    const showclear = (e) => {
        e.preventDefault();
    }


    const cityshowSeoul = (e) => {
        e.preventDefault();

        const kw = encodeURI('서울');
        getData(kw);
    }

    const cityshowBusan = (e) => {
        e.preventDefault();

        const kw = encodeURI('부산');
        getData(kw);
    }

    const cityshowJeju = (e) => {
        e.preventDefault();

        const kw = encodeURI('제주');
        getData(kw);
    }


    return (
        <main className="container">
            <form>
                <article>
                    {/* <header>
                            <h1>한국관광공사_관광사진 정보</h1>
                        </header> */}

                    <div className="container" id={style.timage}>
                        <img src={require("../img/title.png")} />
                    </div>


                    <article className="grid" id={style.kbox}>
                        <div>
                            <input ref={txt1} type="search" id={style.txt1} name="search" placeholder="키워드를 입력하세요." required />
                        </div>
                        <div className={style.btDiv}>
                            <button onClick={(e) => show(e)} className={style.btDiv}>확인</button>
                            <button onClick={(e) => showclear(e)} className={style.btDiv}>취소</button>
                        </div>
                    </article>

                    <div className="grid" id={style.citycard}>

                        <article className={style.city} id={style.seoul} >
                            <span>서울</span>

                            <div className={style.ctbt}>
                                <a href="#" role="button" className="outline" id={style.ctbtid} onClick={(e) => cityshowSeoul(e)} >바로가기</a>
                            </div>
                        </article>
                        <article className={style.city} id={style.busan}>
                            <span>부산</span>

                            <div className={style.ctbt}>
                                <a href="#" role="button" className="outline" id={style.ctbtid} onClick={(e) => cityshowBusan(e)} >바로가기</a>
                            </div>
                        </article>
                        <article className={style.city} id={style.jeju}>
                            <span>제주</span>

                            <div className={style.ctbt}>
                                <a href="#" role="button" className="outline" id={style.ctbtid} onClick={(e) => cityshowJeju(e)} >바로가기</a>
                            </div>
                        </article>

                    </div>

                </article>
                {items && <GalleryView content={items} />}
            </form>
        </main>
    );
}

export default Gallery;