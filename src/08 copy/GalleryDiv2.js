//import style from './Gallery2.module.css';



const  GalleryDiv2 = ({dt}) => {
    let infos = [];

    
    for(let info of dt) {

        let footerDt = info.galSearchKeyword;

        let hashTags = footerDt.split(',');
//        hashTags = hashTags.map((info) => <span>info.split(' ')</span>);
       hashTags = hashTags.map((info, idx) => 
        <span key={info.galCreatedtime + '-'+idx} >
            
             <span key={info.galModifiedtime + '-'+idx} > # </span>  
            {info} 
        </span>
       );

        // hashTags = hashTags.map((i) => <span className='sp1'>{}</span>)
        infos.push(
            <article key={info.galContentId}>
                <header>
                    <span>{info.galTitle}</span>
                    <span> {info.galPhotographyLocation}</span>
                </header>
                <div>
                    <img src={info.galWebImageUrl}>                   
                    </img>
                </div>
                <footer >
                
                {hashTags}
                
                </footer>
            </article>
        );
        
    }       
    return (
        <>
        {infos}
        </>
    );
}

export default GalleryDiv2;