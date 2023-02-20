import React from 'react'
const Formulario = (props) => {
    const {handleSubmit, handleChange, tarea} = props
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='Introduce la tarea'
            onChange={handleChange}
            value={tarea} />
        <input
            type="submit"
            className='btn'
            value="AGREGAR"
            onClick={handleSubmit} />
    </form>
  )
}
export default Formulario