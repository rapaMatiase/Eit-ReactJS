import PostItem from "../PostItem";
import './style.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import PostItemInput from "../PostItemInput";

function Tarjetero(){

    const [json, setJson] = useState([]);

    /* Quiero que esto se ejecute una sola vez!!!, entonces dependencias vacias [] */
    useEffect(()=>{
        Axios({
            url : "https://jsonplaceholder.typicode.com/posts"
        })
        .then((response)=>{
            setJson(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })    
    }, [])

    return (
        <div className="tarjetero_contenedor">
            
            {json.map((post)=>(
                 <PostItemInput 
                 id={post.id}
                 title={post.title}
                 body={post.body}
             />
            ))}   
        </div>
    )
}

export default Tarjetero;