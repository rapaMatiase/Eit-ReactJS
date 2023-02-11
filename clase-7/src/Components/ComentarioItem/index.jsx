import './style.css';



function ComentarioItem({comentarioData}){

    return( 
        <div className='cometario' key={ComentarioItem.postId} >
            <p>{comentarioData.body}</p>
            <span>{comentarioData.user.username}</span>
        </div>  
    )
}

export default ComentarioItem;

/* 6min 11.33 */