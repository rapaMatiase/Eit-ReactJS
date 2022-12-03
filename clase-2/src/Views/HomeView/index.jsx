import ContadorDeEntrada from "../../Components/ContadorDeEntrada";
import ContadorDeSalidas from "../../Components/ContadorDeSalidas";
import './style.css';
import MostrarCoordenadas from "../../Components/MostrarCoordenadas";
import DireccionDeSalida from "../../Components/DireccionDeSalida";
function HomeView(){

    return (
        <div className="contenedorHomeView">
            <div>
                hola
            </div>
            <div>
                <ContadorDeEntrada />
            </div>
            <div>
                <ContadorDeSalidas />
            </div>
            <div>
                <MostrarCoordenadas />
            </div>
            <div>
                <DireccionDeSalida />
            </div>
        </div>
    )
}
export default HomeView;