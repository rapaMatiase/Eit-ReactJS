import './style.css';
import icono from './../../Assert/logo.svg';
function BotonCuadrado(){


    return(
        <div className='contenedorBotonCuadrado'> 
            <img src={icono} alt="icono de reactjs" />
        </div>
    )
}

export default BotonCuadrado;