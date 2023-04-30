import './Comment.css'

const Comment =(props) => {
    return (
        <div className='wrapper'>
            <div className='imageContainer'>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                className='image'
            />

            </div>
            
            <div className='contentContainer'>
                <span className='nameText'>{props.name}</span>
                <span className='commentText'>{props.comment}</span>
            </div>

        </div>
    );

}
export default Comment;