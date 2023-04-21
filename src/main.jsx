import React from "react";
import ReactDOM from "react-dom/client";
import {FirstApp} from './FirstApp'
import './styles.css'
import { CounterApp } from "./CounterApp";


//Aqui es donde conseguimos la referencia donde estara nuestros bloques que creemos
ReactDOM.createRoot(document.getElementById('root')).render(
    //Aqui es donde hacer referencia de cual va a ser el bloque que se insertara
    //En este caso lo hemos importado 
    <React.StrictMode>
        {/* <FirstApp title="Hola, soy Vegeta"/> */}
        <CounterApp value={25}/>
    </React.StrictMode>
)

