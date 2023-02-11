import './style.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';


/* Hasta 10.26 */
function PostItem({postData, setIdPostSeleccionado}){
    
    const [user, setUser] = useState({});

    useEffect(()=>{
        Axios({url : `https://dummyjson.com/users/${postData.userId}`})
        .then((response)=>{
            const data = response.data
            setUser(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])

    return(
        <div className="postitem" key={postData.id}>
            <h3> {postData.title} </h3>
            <p>{postData.body}</p>
            <span> By {user.maidenName} </span>
            <div>
                {postData.tags.map((item, index)=>(
                    <span key={`${postData.id}-${index}`}> {item}- </span>
                ))}
            </div>
            <span> Reacciones : {postData.reactions} </span>
            <button onClick={()=>{setIdPostSeleccionado(postData.id)}} > Ver comentarios </button>
        </div>
    );
}

export default PostItem;