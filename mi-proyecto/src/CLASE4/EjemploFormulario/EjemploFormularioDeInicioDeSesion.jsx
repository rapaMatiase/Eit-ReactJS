import InputNombre from './InputNombre';
import InputPassword from './InputPassword';
import LineaHorizontal from './ComponenteLineaHorizontal'
const estilos = {
    display : "flex",
    flexDirection : "column",
    height : "200px",
    width : "300px",
    padding : "20px",
    boxShadow : "0px 0px 15px -5px rgba(0,0,0,0.59)",
    margin : "10px"
}

function FormularioDeInicioDeSesion(){
    return(
        <div style={estilos}>
            <InputNombre />
            <InputPassword />
            <LineaHorizontal />
        </div>
    )
}

export default FormularioDeInicioDeSesion;