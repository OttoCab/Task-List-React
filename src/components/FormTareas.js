import React, { useState } from "react";

const FormTareas = () => {
  // En esta parte escribo la logica de js
  // Creamos los state (uno a varios)
  // Siempre con const, const [nombreDelState]
const [tareas, setTareas] = useState([]);
const [tareaInd, setTareaInd] = useState("");
// la "e" es del objeto event
// const guardarTarea = (e) =>{
//     // console.log('desde la funcion guardar tarea');
//     console.log(e.target.value);
//     // guardo un dato en el state tareaInd
//     setTareaInd(e.target.value); 
// }
// Ver video React parte 3, min 2:03:37
// lo que hago es sacar guardarTarea en onchange y escribir la funcion

const handleSubmit = (e) =>{
    e.preventDefault();
    // Spread operator  "...nombreVar"
    // guardar una tarea en el arreglo de tareas
    setTareas([...tareas, tareaInd])
}

return (
    // Aqui tmb puede ir logica
    <div className="container d-flex justify-content-center">
        {/* Codigo html */}
        {/* Sugerencia, si no se como llamar a una funcion que se llama al suceder un evento puedo llamarlo "handle" + 
        "nombreEvento" ej "handleSubmit"*/}
        <form className="w-75" onSubmit={handleSubmit}>
            <div className="mb-3 d-flex">
                <input
                    type="text"
                    placeholder="Ingrese una tarea"
                    className="form-control me-2"
                    onChange={(e) => setTareaInd(e.target.value)}
                />
                {/* los eventos van en camelCase */}
                <button className="btn btn-outline-light" type='submit'>Agregar</button>
            </div>
        </form>
    </div>
);
};

export default FormTareas;
