/* Realizar un componente que tenga un elemento ul o ol, y adentro elementos li para cada uno de los siguientes items.

- Comprar carne
- Sacar turno con el dentista.
- Buscar nuevo departamento.

4min 18.05

<ol>
    <li> item </li>
</ol>

*/

function ListaDeTareas(){

    return (
        <div>
            <h3> Lista de pendientes </h3>
            <ul>
                <li> Comprar carne</li>
                <li> Sacar turno</li>
                <li> Buscar nuevo departamento</li>
            </ul>
        </div>
    );
}

export default ListaDeTareas;