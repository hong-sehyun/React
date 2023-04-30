import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요, 길동입니다.",
    },
    {
        name: "이순신",
        comment: "리액트 재미있어요!",
    },
];
const CommentList=()=>{
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;