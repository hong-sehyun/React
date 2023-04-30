import style from './Comment.module.css';
import React from 'react';

const Comment =(props) => (
    <div className={style.wrapper}>
        <div className={style.imageContainer}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                className={style.image} />
        </div>

        <div className={style.contentContainer}>
            <span className={style.nameText}>{props.name}</span>
            <span className={style.commentText}>{props.comment}</span>
        </div>
    </div>
)
export default Comment;