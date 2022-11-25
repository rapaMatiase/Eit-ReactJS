

function Contenedor(props){


    return (
        <div style={{display : "flex", flexDirection : props.direction, padding : "1rem"}}>
                
            {props.children}
        
        </div>
    );
}

export default Contenedor;