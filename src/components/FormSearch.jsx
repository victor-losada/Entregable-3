import React, { useRef } from 'react'
import './styles/FormSearch.css'
const FormSearch = ({setLocation}) => {

    const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        // previene lo que viene por defecto
        setLocation(inputSearch.current.value.trim())
    }

  return (
  <form className='form' onSubmit={handleSubmit}>
    <input className='form__input' ref={inputSearch} type="text" />
    {/* para capturar un elemnto del virtual downm lo hacemos atraves de sus referencias */}
    <button className='form__btn'>Search</button>
  </form>
  )
}

export default FormSearch