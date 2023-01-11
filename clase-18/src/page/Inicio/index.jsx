import  Axios  from "axios";
import React, { useEffect, useState } from "react";
import FilaCategoria from "../../Components/FilaCategoria";

function Inicio(){

    const [jsonCategorias, setJsonCategorias] = useState([]);
    const [login, setLogin] = useState(true);

    useEffect(()=>{
        Axios({
            url : `https://dummyjson.com/products/categories`
        })
        .then((response)=>{
            setJsonCategorias(response.data)
            setLogin(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[login]);

    /* Modificar el axios para que pida la lista de las categorias, y crear un map con el compoennete de FilaCategoria que muestre los productos de cada categoria un debajo de otro.
    19.48 */
    return (
        <React.Fragment>

            {
                jsonCategorias.map((categoria, index)=>(
                    <FilaCategoria categoria={categoria} key={`${categoria}-${index}`} />
                ))
            }
        </React.Fragment>
    )
}

export default Inicio;