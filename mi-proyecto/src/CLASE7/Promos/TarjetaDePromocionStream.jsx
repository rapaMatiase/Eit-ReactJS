import LogoDeStream from './LogoDeStream';
import TextoPromociones from './TextoPromociones';

function TarjetaDePromocionStream(props) {
	const estilos = {
		contenedor: {
			backgroundImage: `url(${props.imagen})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			height: '300px',
			width: '400px',
			borderRadius: '7px',
            display : "flex",
            alignItems : "end",
            padding : "0.5rem",
            boxSizing : "border-box",
		},
        subContenedor : {
            display : "flex",
            height : "7rem",
            alignItems : "end",
        }
	};

	return (
        <div style={{paddingLeft : "5px", paddingRight : "5px"}}>
            <div style={estilos.contenedor}>
                <div style={estilos.subContenedor}>
                    <LogoDeStream 
                        logo={props.logo} 
                        detalle={'Logo de stream'} />

                    <TextoPromociones 
                        plataforma="HBO Max" 
                        descuento="Hasta 50% OFF" 
                        pruebaGratis="7 dias sin cargo" />
                </div>            
            </div>
        </div>
	);
}

export default TarjetaDePromocionStream;
