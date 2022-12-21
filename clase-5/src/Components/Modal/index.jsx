import { useState } from 'react';
import './style.css';

function Modal({show, setShow, children}){


    const estilos = {
        display : show ? "initial" : "none",
    }
    return (
        <div style={estilos}  className='modal_contendor'>
            <div className='modal_paper' >
                {children}
                <button onClick={()=>{setShow(false)}} > Cerrar </button>
            </div>
        </div>
    )
}

export default Modal;