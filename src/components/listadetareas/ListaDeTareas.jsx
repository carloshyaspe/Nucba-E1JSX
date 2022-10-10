import React from 'react'

const ListaDeTareas = (props) => {
    console.log(props.id)
    const borrarTarea = () =>{
        props.borrar(props.id);
    }
    return (
        <div>
            <div className='tarea'>
                <span>{props.tarea} </span>
                <span className='delete' onClick={borrarTarea}>borrar</span>
            </div>
        </div>
    )
}

export default ListaDeTareas