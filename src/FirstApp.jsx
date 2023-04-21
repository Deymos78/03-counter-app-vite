//Esta es la primera aplicacion que se hara con React

// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Fernando',
// };
import PropTypes from 'prop-types';


//Se pueden definir props por defecto
export const FirstApp = ({title, subTitle, name}) =>{
     
    return(
        <>
        <h1 data-testid="test-title">{title}</h1> 
        {/* <h1>{JSON.stringify(newMessage)}</h1> */}
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{name}</p>
        </>
    )
}


//Con los proptypes se pueden especificar como deben ser los props  
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}


FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Fernando Gutierrez'
}