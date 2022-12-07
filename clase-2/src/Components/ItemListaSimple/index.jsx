import { useState } from 'react';
import './style.css';


const SubComponente = () => {
    return (
        <div className="itemListaSimple_tapa"> 
            <button> Modificar </button>  
        </div>
    )
}

function ItemListaSimple(props) {
    //Estado interno
	const [ mostrar, setMostrar ] = useState(false);

	const mostrarBotonDeModificacionRapida = () => {
		setMostrar(true);
	};

	const ocultarBotonDeModificacionRapida = () => {
		setMostrar(false);
	};

	return (
		<div
			className="itemListaSimple_contenedor"
			onMouseEnter={mostrarBotonDeModificacionRapida}
			onMouseLeave={ocultarBotonDeModificacionRapida}
		>
			{mostrar ? <SubComponente />  : ''}
			<p className="itemListaSimple_texto"> {props.detalle} </p>
		</div>
	);
}

export default ItemListaSimple;
