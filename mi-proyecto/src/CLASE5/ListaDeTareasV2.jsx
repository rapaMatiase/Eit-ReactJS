/* Realizar un componente que tenga un elemento ul o ol, y adentro elementos li para cada uno de los siguientes items.

- Comprar carne
- Sacar turno con el dentista.
- Buscar nuevo departamento.

4min 18.05

<ol>
    <li> item </li>
</ol>

*/

import ItemListaDeTareas from "./ItemListaDeTareas";

/* 
Los HOOKS son el estado interno de un componente. Un HOOK es algo que el componente maneja internamente.
Las PROPS son el estado externo de un componente. Un valor que le pasa el componente padre a un hijo.  
*/

function ListaDeTareas(){

    return (
        <div>
            <h3> Lista de pendientes </h3>
            <ul>
                <ItemListaDeTareas textoTarea={"Comprar Carnes"} />
                <ItemListaDeTareas textoTarea={"Sacar turno con el dentista"} />
                <ItemListaDeTareas textoTarea={"Buscar nuevo departamento"} />

            </ul>
        </div>
    );
}

export default ListaDeTareas;