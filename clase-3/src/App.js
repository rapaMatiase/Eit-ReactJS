import './App.css';
// import Ejercicio1 from './Components/Ejercicio1';
// import { EjemploHookContador, EjemploHookUseStateTipoObjeto } from './Components/EjemploHookUseStateTipoObjeto';
// import Ejercicio2 from './Components/Ejercicio2';
// import EjemploHookUseStateTipoArray from './Components/EjemploHookUseStateTipoArray';
import ListaDeTareas from './Components/Ejercicio3'; 
import useArray from './Hooks/useArray';
function App() {

  const [valor, setValor, invertir ] = useArray([1,2,3,4])
  

  return (
    <div className="App">
      {/* <Ejercicio1 
        url="https://picsum.photos/id/1/300/200"
        id="1"
        author="Alendro Escamilla"
        /> */}

        {/* <EjemploHookContador /> */}
        {/* <EjemploHookUseStateTipoObjeto /> */}
        {/* <Ejercicio2> 
          <Ejercicio1 url="https://picsum.photos/id/1/300/200" id="1" author="Alendro Escamilla" />
          <Ejercicio1 url="https://picsum.photos/id/1/300/200" id="1" author="Alendro Escamilla" />
          <Ejercicio1 url="https://picsum.photos/id/1/300/200" id="1" author="Alendro Escamilla" />
          <Ejercicio1 url="https://picsum.photos/id/1/300/200" id="1" author="Alendro Escamilla" />
          <Ejercicio1 url="https://picsum.photos/id/1/300/200" id="1" author="Alendro Escamilla" />
        </Ejercicio2> */}

        {/* <EjemploHookUseStateTipoArray /> */}
        <ListaDeTareas />
    </div>
  );
}

export default App;
