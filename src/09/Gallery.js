/*
한국관광공사_관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/
import { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css' ;
import GalleryView from './GalleryView';

const Gallery = () => {

    const txt1 = useRef();

    //state 변수
    const [items, setItems] = useState();


    // 컴포넌트가 처음 랜더링 되었을때 한번 실행
    useEffect(() => {
        txt1.current.focus();
    },[]);

    //
    useEffect(() => {
        console.log("useEffect", items);
    },[items]);  

    const getData = (kw)=> {
        let apikey = 'dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D';
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        url = url + `serviceKey=${apikey}`;
        url = url +'&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A';
        url = url +`&keyword=${kw}`;
        url = url + '&_type=json';
        console.log(url);

        fetch (url)
        .then((resp) => resp.json())
        .then((data) => setItems(data.response.body.items.item))
        .catch((err) => console.log(err))

    }

    //확인버튼
    const show = (e) => {

        e.preventDefault();

        if( txt1.current.value === '') {
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


     
    return(
        <main className="container">
            <form>
                <article>
                        <header>
                            <h1>한국관광공사_관광사진 정보</h1>
                        </header>
                        <div className="grid">                        
                            <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                            </div>
                            <div className={styles.btDiv}>
                                <button onClick={(e) => show(e)}>확인</button> 
                                <button onClick={(e) => showclear(e)}>취소</button>
                            </div>
                        </div>                    
                </article>
                {items && <GalleryView content={items} />}
            </form>
        </main>
    );
}

export default Gallery ;