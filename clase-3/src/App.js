// import Contador from './Components/Contador';
// import EjemploHookDeObjetos from './Components/EjermploHookConObjetos';
// import Ejercicio1 from './Components/Ejercicio1/Ejercicio1';
import EjemploPropiedades from './Components/EjemploPropiedades';
import {Ejercicio2A, Ejercicio2B} from './Components/Ejercicio2';
import './App.css';


const json = [

  {id : 156, title : "Christopher Sardengna", url : "https://picsum.photos/id/156/300/200"},
  {id : 157, title : "koichi nakajima", url : "https://picsum.photos/id/157/300/200"},
  {id : 158, title : "Daniel Robert", url : "https://picsum.photos/id/158/300/200"},
  
]

function App() {
  return (
    <div className="App" style={{backgroundColor : "#EEEF2"}}>
      {/* <Contador /> */}
      {/* <EjemploHookDeObjetos /> */}
      {/* <Ejercicio1 /> */}
      {/* <Ejercicio2A 
        url="https://picsum.photos/id/156/300/200"
        title="Christopher Sardengna"
        id="156"
        /> */}

      {/* <Ejercicio2B 
            url="https://picsum.photos/id/156/300/200"
            title="Christopher Sardengna"
            id="156"
            /> */}
        {/* <EjemploPropiedades 
          propiedad1="Valor de la propiedad 1"
          propiedad2={true}
          propiedad3="Esta propiedad no es esperada, llega, pero no es usada"
          /> */}

          {/* Utilizo la funcion MAP de array de JS para crear un array de componentes. */}
          {json.map((item) => (<Ejercicio2A 
              key={`ejercicio-${item.id}`}
              url={item.url}
              title={item.title}
              id={item.id}
              />))}

    </div>
  );
}

export default App;
