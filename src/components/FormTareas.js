import React, { Fragment, useState, useEffect } from "react";
import ListaTarea from "./ListaTarea";

const FormTareas = () => {
  // En esta parte escribo la logica de js
  let tareasLocalStorage = JSON.parse(localStorage.getItem("ArrayTareas"));
  if (!tareasLocalStorage) {
    tareasLocalStorage = [];
  }
  // Creamos los state (uno a varios)
  // Siempre con const, const [nombreDelState]
  const [tareas, setTareas] = useState(tareasLocalStorage);
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

  useEffect(() => {
    // va toda la logica que quiero ejecutar tanto en montaje como actualizacion
    console.log("ejecutando el ciclo de vida");
    localStorage.setItem("ArrayTareas", JSON.stringify(tareas));
  }, [tareas]);
  // [] no le presto atencion a los cambios en los states solo en el montaje
  // [tareas] solo presta atencion al state que defino y al ser montado
  // pero definir varios states separadondolos por coma
  // si no pongo los [] se actualiza con el montaje y la modificacion de cualquier state
  const handleSubmit = (e) => {
    e.preventDefault();
    // Spread operator  "...nombreVar"
    // guardar una tarea en el arreglo de tareas
    setTareas([...tareas, tareaInd]);
    // limpiar el input
    setTareaInd("");
  };

  const borrarTarea = (nombre) => {
    let arregloModificado = tareas.filter((dato) => dato !== nombre);
    setTareas(arregloModificado);
  };

  return (
    // Aqui tmb puede ir logica
    <Fragment>
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
              value={tareaInd}
            />
            {/* los eventos van en camelCase */}
            <button className="btn btn-outline-light" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
      <section className="container my-5">
        <ListaTarea
          arregloTareas={tareas}
          borrarTarea={borrarTarea}
        ></ListaTarea>
      </section>
    </Fragment>
  );
};

export default FormTareas;
