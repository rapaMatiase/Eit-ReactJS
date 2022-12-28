
import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import UseCarritoDeCompras from './hook/UseCarritoDeCompras';


function App() {


  const [json, setJson] = useState([]);
  const [carrito,  agregarItem, quitarItem] = UseCarritoDeCompras();



  useEffect(()=>{
    Axios({
      url: 'https://dummyjson.com/products'
    })
    .then((response)=>{
      setJson(response.data.products)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <div className="App">
      <ul>
        {json.map((producto)=>(
          <li>{producto.id} - {producto.title} <button onClick={()=>agregarItem(producto)} >Agregar</button> </li>    
          ))}
      </ul>
      <ul>
        {carrito.map((producto, index)=>(
          <li>{producto.id} - {producto.title} <button onClick={()=>quitarItem(index)} >Agregar</button></li>    
          ))}
      </ul>
    </div>
  );
}

export default App;
