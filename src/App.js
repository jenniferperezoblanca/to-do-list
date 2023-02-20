import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Tarea from './components/Tarea';
function App() {
  const [tarea, setTarea] = useState('')
  const [listadoTareas, setListadoTareas] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault()
    if(tarea === '') {
      alert("Debes de poner una tarea")
      return
    }
    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false
    }
    const temp = [nuevaTarea, ...listadoTareas]
    setListadoTareas(temp)
    setTarea('')
  }
  const handleChange = (event) => {
    setTarea(event.target.value)
  }
  const onActualizarTarea = (objEditarTarea) => {
    const {id, tarea} = objEditarTarea
    const temp = [...listadoTareas]
    
    const elemento = temp.find(item => item.id === id)
    elemento.tarea = tarea
    setListadoTareas(temp)
  }
  console.log([...listadoTareas])
  console.log ([listadoTareas])
  const onBorrarTarea = (id) => {
    const temp = listadoTareas.filter(item => item.id !== id)
    setListadoTareas(temp)
  }
  return (
    <div className="contenedorPrincipal">
      <h1>To-Do List</h1>
      <div className='contenedorFormulario'>
        <Formulario
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          tarea={tarea} />
      </div>
      <div className='contenedorTareas'>
        <h2>Lista de tareas</h2>
        <div className='contenedorInfoTareas'>
          {
            listadoTareas.map(tarea => (
              <Tarea
                key={tarea.id}
                id={tarea.id}
                tarea={tarea}
                onActualizarTarea={onActualizarTarea}
                onBorrarTarea={onBorrarTarea} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
export default App;





















