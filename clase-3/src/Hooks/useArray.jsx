import { useState } from "react";

function useArray(props){

    const [array, setArray] = useState(props.valorIncial)

    const invertir = () => {
        return array.reverse()
    }

    return [
        array,
        setArray,
        invertir,
    ];
}

export default useArray;