function InputTradicional(){

    const cuandoHaceClick = () =>{
        let elInputText = document.getElementById("inputText")
        elInputText.focus()
    }

    return(
        <div>
            <input type="text" id="inputText" />
            <button onClick={cuandoHaceClick}> HACE CLICK </button>
        </div>
    )
}

export default InputTradicional;