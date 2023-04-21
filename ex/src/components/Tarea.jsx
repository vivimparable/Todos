import React from 'react'
import '../App.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
export default function Tarea({texto,completada,id,completarTarea,eliminarTarea}) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div
        onClick={()=>completarTarea(id)}
         className='tarea-texto'>
            {texto}
        </div>
        <div onClick={()=> eliminarTarea(id)} >
            <AiOutlineCloseCircle className='tarea-icono'/>
        </div>
    </div>
  )
} 
