
function ListaDeNombres({lista, setLista}){

    
    //Vuelo a acceder al localStorage para traer los datos persistidos.
    const localStorageContactos = localStorage.getItem("ListaPersistida")
    
    //Creo una funcion que me permite filtrar un elemento por la posicion, y ademas hace dos cosas; Actualiza el store y el hook en el componenete.
    const borrarContacto = (indexParaEliminar) => {
        let listaAuxiliar = JSON.parse(localStorageContactos)
        let listaConItemEliminado = listaAuxiliar.filter((item, index)=>{return index !== indexParaEliminar})
        setLista(listaConItemEliminado)
        localStorage.setItem("ListaPersistida", JSON.stringify(listaConItemEliminado))
    }

    return(
        <div>
            <ul>
                {lista.map((item, index)=>(
                    <li key={`nombre-${index}`} > {item.nombre} 
                        <button onClick={()=>(borrarContacto(index))}> Delete </button>    
                    </li>
                    ))}
            </ul>
        </div>
    )
}
export default ListaDeNombres;