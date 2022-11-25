import './style.css';

function Paper(props){


    return (
        <div style={{padding : "10px"}}>
            <div 
                style={{backgroundColor : props.color}} 
                className={"paper"}>
                {/* La propiedad children hace referencia a  obtener los elementos dentro del componente. */}
                {props.children}
            </div>
        </div>
    );
}

export default Paper;