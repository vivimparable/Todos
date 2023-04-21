import React, { useState } from 'react'
import TareasFormulario from './TareasFormulario'
import Tarea from './Tarea'

export default function ListaDeTareas() {
  const [tareas,setTareas] = useState(
    JSON.parse(window.localStorage.getItem('tareas')) || []
  )
  
  const completarTarea = (id) =>{
      const actualizar = tareas.map(a=>{
        if(a.id == id){
          a.completada = !a.completada
        }
        return a;
      })
      setTareas(actualizar)
      window.localStorage.setItem('tareas', JSON.stringify(actualizar));    

      
  }

  const agregarTarea =(tarea)=>{
    if(tarea.texto){
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      window.localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));    }
  }

  const eliminarTarea=(id)=>{
   setTareas( tareas.filter(a =>{
      return  a.id != id  
    }))

  }
  return (
    <>

<div className='tareas-lista-principal'>
        <TareasFormulario onSubmit={agregarTarea} />
          <h1> Lista de tareas</h1>

          {
            tareas ?
            tareas.map(a=>

             <Tarea 
             eliminarTarea={eliminarTarea}
              key={a.id} 
              completada={a.completada} 
              completarTarea={completarTarea}  
              texto={a.texto}
              id={a.id}
              />

            ) : console.log('error')
          }


</div>

       
    </>
  )
}
