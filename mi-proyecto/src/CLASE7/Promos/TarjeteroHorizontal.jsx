import TarjetaDePromocionStream from "./TarjetaDePromocionStream";
import imagenLogo from './img/hbo-max-logo.png';
import logoParamount from './img/paramount-logo-vdp-56-x-56-filled@3x.png';
import logoDisney from './img/comboplus-square@2x.jpg';
import fondoHbo from './img/HBOMax_widgetmulti_mobdsk_mla_@3x.jpg'
import fondoParamount from './img/paramount_widgetmulti_mobdsk_mla_@3x.jpg';
import fondoDisney from './img/Widget_Multicontent_Latam_1152-x-849px.jpg'

function TarjeteroHorizontal(){

    const estilos = {
        contenedorHorizontal :{
            display : "flex",
            flexDirection : "row", /* VALOR POR DEFAULT, PODRIA NO HACERLO */
            justifyContent : "center",
            maxWidth : "1230px"
        },
        titulo :{
            fontWeight : "normal",
            paddingLeft : "5px"
        },
        contendorCentrado : {
            display :"flex",
            justifyContent : "center"
        }
        
    }

    return (
        <div style={estilos.contendorCentrado}>
            <div>
                <div style={{width : "100%"}}>
                <h1 style={estilos.titulo}>Beneficios del mercado puntos</h1>

                </div>
                <div style={estilos.contenedorHorizontal}>

                    <TarjetaDePromocionStream 
                            imagen={fondoHbo}
                            logo={imagenLogo}
                            />
                    
                    <TarjetaDePromocionStream 
                        imagen={fondoParamount}
                        logo={logoParamount}
                        />

                    <TarjetaDePromocionStream 
                        imagen={fondoDisney}
                        logo={logoDisney}
                        />
                </div>
                
            </div>
        </div>
    )
}

export default TarjeteroHorizontal;