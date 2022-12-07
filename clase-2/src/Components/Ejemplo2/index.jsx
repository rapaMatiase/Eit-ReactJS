function Ejemplo2(props){

    return(
        <div>
            <h2> Todo </h2>
            <div style={{display : "flex", flexDirection : "column"}}>
                {props.children}
            </div>
        </div>
    )
}

export default Ejemplo2;