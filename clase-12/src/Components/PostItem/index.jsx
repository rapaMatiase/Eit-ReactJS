import './style.css';

/* 1) Tomo un json de ejemplo, y armo una estructura de HTML/CSS/JS para esa informacion.
2) Una vez que tengo la estructura deseada, utilizo las propiedades para recibir la informacion.
3) .... */

function PostItem({id, title, body}){

    return(
        <div 
            id={id} 
            className="postItem_contendor"
            >
                <h3 className='postItem_title'>{title}</h3>
                <p className='postItem_parrafo'>
                    {body}
                </p>
        </div>
    )
}

export default PostItem;