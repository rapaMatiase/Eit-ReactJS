/* Crear un compoenente de scroll con al propiedad de css overflow con el valor scroll, y una algura de 80vh. Ademas de ser un componenete capaz de recibir otros componentes como propiedad.

<ScrollHorizontal>
    <p> otro elemento </p>
</ScrollHorizontal>

{props.children}

11.15

*/
import './style.css';

function ScrollHorizontal(props){

    return(
        <div className="scroll" >
            {props.children}
        </div>
    );
}

export default ScrollHorizontal;