import React from 'react';
import ItemTarea from './ItemTarea';

const ListaTarea = (props) => {
    return (
        <ul className='list-group'>
            {
                props.arregloTareas.map((valor,indice)=> <ItemTarea key={indice} dato={valor}/> )
            }
            
        </ul>
    );
};

export default ListaTarea;