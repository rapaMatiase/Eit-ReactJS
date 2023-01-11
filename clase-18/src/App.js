//PASO 1 : Necesito importar como minimo estos tres compoenetes para armar un router.
import { HashRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Inicio from './page/Inicio';
import Contacto from './page/Contato';
import NoEncontrada from './page/NoEncontrada';
import ListaDeProductos from './page/ListaDeProductos';
import DetalleDeProducto from './page/DetalleDeProducto';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu />


        <Routes>
          {/* El path es literalmente la direccion que aparece en la url despues del #. El element es la page a cargar en pantalla. 
          El primero espera un string con un '/' al principio, y el segundo un componente de React.
          En realidad el PATH espera una expresion regular. Si utilizo un *, estoy diciendo cualquier valor.
          */}
          
          <Route path='/home' element={<Inicio />} />
          <Route path='/contacto' element={<Contacto />} />
          {/* Ejercicio */}
          <Route path='/detalle/:id' element={<DetalleDeProducto />} />
          <Route path='/lista' element={<ListaDeProductos />} />

          {/* El Route con un * en path, funciona como el caso por default en IF o Switch. */}
          <Route path='*' element={<NoEncontrada />} />

          {/* Los componentes Route viene de Routerv5. El cambio fue que atributo componenet paso a ser element. */}

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
