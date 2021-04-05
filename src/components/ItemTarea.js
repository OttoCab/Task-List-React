import React from 'react';

const ItemTarea = (props) => {
    return (
        <li className='list-group-item my-1 d-flex justify-content-between'>
            {props.dato}
            <button className='btn btn-danger' onClick={()=> props.borrarTarea(props.dato)}>Borrar</button>
        </li>
    );
};

export default ItemTarea;