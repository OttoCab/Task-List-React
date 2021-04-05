import React from 'react';

const ItemTarea = (props) => {
    return (
        <li className='list-group-item my-1'>{props.dato}</li>
    );
};

export default ItemTarea;