import { useState } from 'react';
import PropTypes  from 'prop-types';


//Siempre vamos a tener los Props disponibles
//Pero por lo general se desestructura para solo conseguir lo que estamos buscando
export const CounterApp = ({value}) =>{

    //Los Hoks se usan con constantes para evitar cambiar el valor fuera de la funcion
    const [ counter, setCounter ] = useState( value );
    
    const handleApp = () =>{

        // setCounter(counter +1);
        setCounter( (c) => c+1 );
        
    }

    const subtractCounter = () =>{
        setCounter((c) => c-1)
    }

    const resetCounter = () => {
        setCounter( (c) => value )
    }



    return(
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleApp }> +1 </button>
            <button onClick={ subtractCounter } > -1 </button>
            <button aria-label="btn-reset" onClick={ resetCounter }> Reset </button>
        </>
        
    )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}