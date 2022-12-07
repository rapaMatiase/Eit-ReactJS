import './App.css';
import RepasoClaseAnterior from './Components/RepasoClaseAnterior';
import Ejercicio1 from './Components/Ejercicio1';
import {Ejemplo1, Ejemplo1B, Ejemplo1C} from './Components/Ejemplo1';
import ItemListaSimple from './Components/ItemListaSimple';
import Ejemplo2 from './Components/Ejemplo2';
import Ejercicio2 from './Components/Ejercicio2';
const json = [
  {detalle : "Hacer las compras"},
  {detalle : "Ir al dentista"},
  {detalle : "Sacar al perro"},
  {detalle : "Buscar la ropa al lavadero"},
]

function App() {
  return (
    <div className="App">
        <Ejercicio2 />
      
        <Ejemplo2>         
          {/* Lo que esta entre el tag de inicio y final, se lo denomina como la propiedad children. */}
            {json.map((item, index)=> (<ItemListaSimple key={`item-${index}`} detalle={item.detalle} />))}
        </Ejemplo2>
        
        {/* <RepasoClaseAnterior />
        <Ejercicio1 />
        <Ejemplo1 />
        <Ejemplo1B />
        <Ejemplo1C /> */}
      
    </div>
  );
}

export default App;
