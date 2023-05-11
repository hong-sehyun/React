import { useState, useEffect, useRef } from "react";
import style from './Gallery.module.css';
import GalleryDiv from './GalleryDiv.js';

//한국관광공사 관광사진갤러리 키워드 검색 목록 조회
//dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D
//https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
const Gallery = () => {

    const [dtlist, setDtlist] = useState();


    //키워드 인풋
    const txt1 = useRef();

    //컴퍼넌트가 맨처음 렌더링 되면
    useEffect(() => {
        txt1.current.focus();
    },[])

    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;

        let kw = encodeURI(txt1.current.value) ; 
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=dL2mQ3OFiO%2FkfihiQfLLxHCDmpSqXLfejo6d5WhFD%2FWYBPTd2Z5J5b0UL9n4nn%2BTTHig6ZSVnRKZfLPoV%2FUZxQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${kw}&_type=json`;
        
        fetch (url)
        .then((resp) => resp.json())
        .then((data) => setDtlist(data.response.body.items.item))
        .catch((err) => console.log(err))
    
        console.log(txt1.current.value, kw) ;
        
    }

    //취소버튼
    const showClear = (e) => {
        e.preventdefault();
        txt1.current.value = '';
    }




    return(
        <main className={style.container}>
            <article>
                <header>
                    <h1>한국 관광공사_관광사진 정보</h1>
                </header>
                <div className="grid">
                    <div>
                        <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요" />
                    </div>
                    <div className={style.btDiv}>
                        <button onClick={(e) => show(e)}>등록</button>
                        <button onClick={(e) => showClear(e)}>취소</button>
                    </div>
                </div>
            </article>
            <div className="grid">
                
                <div>{dtlist && <GalleryDiv dt = {dtlist}/>}</div>
                <div></div>
                
            </div>
        </main>
    );
}

export default Gallery;