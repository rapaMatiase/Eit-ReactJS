import { useState } from 'react';
import './App.css';
import ListaDeApellidos from './Components/ListaDeApellidos';
import ListaDeNombres from './Components/ListaDeNombres';
import UselocalStorageListas from './hook/UselocalStorage';
import Contador from './Components/Contador';
import UseLocalStoreNumber from './hook/UseLocalStoreNumber';
const listaContactos = [
  {nombre: "Carla", apellido : "Kiroga"},
  {nombre : "Cesar", apellido : "Moros"},
  {nombre : "Damian", apellido : "Cabrera"}
]

function App() {
  
  const [
          lista, 
          setLista, 
          agregarContacto
        ] = UselocalStorageListas("ListaDeContactos", listaContactos);
  

  const [contador, sumarUno] = UseLocalStoreNumber("ContadorPersistido", 0)
  return (
    <div className="App">
      <button onClick={()=>{agregarContacto()}} > Agregar </button>
      <ListaDeNombres lista={lista} setLista={setLista} />
      <ListaDeApellidos lista={lista} setLista={setLista} />
      <Contador contador={contador} sumarUno={sumarUno} />
      
    </div>
  );
}

export default App;
