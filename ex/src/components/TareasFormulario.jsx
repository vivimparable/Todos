import React, { useState,useRef } from 'react';
import {v4 as uuidv4} from 'uuid';
 
export default function TareasFormulario(props) {
const [input,setInput] =useState('')
const valor = useRef()

  const cambio =(e)=>{
    setInput(e.target.value)
  };

  const envio =(e) =>{
    
    e.preventDefault();

    const nuevaTarea= {
      id: uuidv4(),
      texto:input,
      completada:false

    }
    
    props.onSubmit(nuevaTarea)
     e.target[0].value = ''
     setInput('')

  }
  return (
    <div>
        <form className='tarea-formulario' 

         onSubmit={envio}>

                <input
                
                ref={valor}
                onChange={cambio}
                className='tarea-input'
                placeholder='Escribe una tarea'
                name='texto'
                type="text" />

                <button  className='tarea-boton'>
                    AgregarTarea
                </button>
            
        </form>
    </div>
  )
}
