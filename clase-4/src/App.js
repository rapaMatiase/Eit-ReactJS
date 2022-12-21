import './App.css';

import Ejercico3 from './Components/Ejercicio3';
import FormularioConComponentesInput from './Components/FormularioConComponentesInput';

function App() {
  return (
    <div className="App">
      
      {/* El problema de utilizar el atributo ID es que es no escalable. No podes asegurar que ningun desarrollador utilizo el mismo id que vos en otros componenetes. Al final la pagina es la sumatoria de los distintso codigos en un solo archivo.  */}

      {/* <InputTradicional />
      <InputTradicional />
      <InputTradicional /> */}

      {/* <InputRef />
      <InputRef />
      <InputRef /> */}


      {/* <RepasoHookUseStateObjeto /> */}

      {/* <Ejercicio1 /> */}

      {/* <Ejercicio2 /> */}

      {/* <Formulario /> */}

      <FormularioConComponentesInput />
      
    </div>
  );
}

export default App;
