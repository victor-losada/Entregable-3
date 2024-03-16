import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/ResidentCard.css'

const ResidentCard = ({url}) => {

     const [caracter, getCaracter] = useFetch(url)

     useEffect(()=>{
        getCaracter()

     },[])


  return (
    <article className='resident'>
        <header className='resident__header'>
            <img className='resident__image' src={caracter?.image} alt="" />
            <div className='status'> 
                <div className={`status__circle ${caracter?.status}`}></div>
                <div className='resident__value'>{caracter?.status}</div>
            </div>
        </header>
        <section className='resident__body'>
            <h3 className='resident__name'>{caracter?.name}</h3>
            <hr className='resident__hr'/>
            <ul className='resident__list'>
                <li className='resident__item'><span className='resident_label'>Specie</span><span className='resident__value'>{caracter?.species}</span></li>
                <li className='resident__item'><span className='resident_label'>Origin</span><span className='resident__value'>{caracter?.origin.name}</span></li>
                <li className='resident__item'><span className='resident_label'>EPisode Where Appear</span><span className='resident__value'>{caracter?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard