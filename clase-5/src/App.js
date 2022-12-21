import './App.css';
// import Ejercico3 from './Components/Tarea/Ejercicio3';
// import Modal from './Components/Modal';
// import { useState } from 'react';
// import TarjetaPost from './Components/TarjetaPost';
import TarjeteroDePost from './Components/TarjeteroDePost';
import EjemploHookUseEffect from './Components/EjemploHookUseEffect';
function App() {

  // const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <Ejercico3 /> */}

      {/* <button onClick={()=>{setShow(true)}} > Show </button>
      <Modal show={show} setShow={setShow} >
        <p> Hola comao </p>
      </Modal> */}

      {/* {show && <Ejercico3 />} */}

      {/* <TarjetaPost titulo={json.title} detalle={json.body} /> */}
      <TarjeteroDePost />
      {/* <EjemploHookUseEffect /> */}
    </div>
  );
}

export default App;
