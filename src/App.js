import { Fragment } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import FormTareas from './components/FormTareas';


function App() {
  return (
    // borro la clase (propiedad o atributo)
    // React me pide siempre devolverme UNA PORCION de codigo dentro de "una etiqueta"
    //  ej, no pido poner un div y un section en el mismo nivel
    // <div>
    //   {/* Al iniciar el proyecto borro todo lo que esta dentro de la etiqueta header (incluida) */}
    //   <h1>Prueba</h1>
    //   <p>Lorem ipsum dolor sit amet.</p>
    //   <section>
    //     <h2>Subtitulo</h2>
    //   </section>
    // </div>
    // Fragment: componente que creo la gente de react
    // me importa automaticamente el Fragment (ver arriba)
    <Fragment>
      <Titulo prueba={false}></Titulo>
      <Subtitulo comision='1A' estado={true}/>
      <FormTareas/>
      {/* <hr/> */}
      {/* <h1>Lista de Tareas</h1>
      <ul>
        <li>prueba</li>
        <li>prueba</li>
        <li>prueba</li>
        <li>prueba</li>
      </ul> */}
    </Fragment>
  );
}

export default App;

// siempre que cree cosas que no vaya a utilizar, al complilar react me va devolver un warning
// en el caso que yo borre el logo (que lo estoy importando) ademas de devolverme el warning
// VS me marca de una manera mas tenue lo que no estoy utilizando, en este caso el import logo from './logo.svg';
