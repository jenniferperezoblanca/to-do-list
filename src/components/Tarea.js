import React, { useState } from 'react'
const Tarea = (props) => {
    const {tarea, onActualizarTarea, onBorrarTarea} = props
    const [editando, setEditando] = useState(false)
    const [estaCompletada, setEstaCompletada] = useState(false)
    const ModoEdicionActivado = () => {
        const [valor, setValor] = useState(tarea.tarea)
    const handleChange = (event) => {
        const text = event.target.value
        setValor(text)
    }
    const handleClick = (event) => {
        event.preventDefault()
    onActualizarTarea(
        {
            id: tarea.id,
            tarea: valor,
            completado: false
        }
    )
        setEditando(false)
}
        return(
            <>
                <input
                    type="text"
                    onChange={handleChange}
                    value={valor} />
                <button className='btn'
                        onClick={handleClick}>
                    GUARDAR
                </button>
                <button className='btn btnBorrar'
                    onClick={() => onBorrarTarea(tarea.id)}>
                    BORRAR
                </button>
            </>
        );
    }
    const ModoEdicionDesactivado = () => {
        return(
            <>
                <span
                    className={estaCompletada ? "todoTarea spanSubrayado" : "todoTarea"}
                    onClick={() => setEstaCompletada(!estaCompletada)}>
                    {tarea.tarea}</span>
                    <button className='btn btnEditar'
                            onClick={() => setEditando(true)}>
                        ACTUALIZAR
                    </button>
                    <button className='btn btnBorrar'
                            onClick={() => onBorrarTarea(tarea.id)}>
                        BORRAR
                    </button>
            </>
        );
    }
  return (
    <>
        <div className='contenedorTarea' id={tarea.id}>
            {
                editando
                ? <ModoEdicionActivado />
                : <ModoEdicionDesactivado />
            }
        </div>
    </>
  );
}
export default Tarea