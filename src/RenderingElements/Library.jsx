import React from "react";
import Book from "./Book";

const Library = () => {


    return(
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 해보는 자바프로그래밍" numOfPage={800} />
            <Book name="처음 만난 리액트" numOfPage={200} />
        </div>
    );

}

export default Library;