import React, { useState } from "react";
import '../css/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        //console.log('Escribiendo...');
        setInput(e.target.value);//extraer el valor del input
    };

    const manejarEnvio = e => {
        e.preventDefault();
        //console.log('Enviando Formulario...');
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        //console.log(tareaNueva);
        props.onSubmit(tareaNueva);
    };

    return(
        <form  onSubmit={manejarEnvio} className="tarea-formulario">
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe una Tarea"
                name="texto"
                onChange={ manejarCambio }
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    );
}

export default TareaFormulario;