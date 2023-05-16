import style from './Gallery.module.css';

const GalleryArticle = ({ item }) => {
    let tags = item.galSearchKeyword.split(',');
    tags = tags.map((i) =><span className={style.sp1}> # {i} </span>)

    return (
        <article>
            <header>
                <div className='grid'>
                    <span className={style.infosp1}>{item.galTitle}</span>
                    <span className={style.infosp2}> {item.galPhotographyLocation}</span>
                </div>
            </header>
            <div>
                <img src={item.galWebImageUrl} />

            </div>
            <footer>
            <div className={style.spd}>
               {tags}
               </div>
            </footer>
        </article>
    );
}
export default GalleryArticle;