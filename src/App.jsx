import React, { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'
import './App.css'

const App = () => {

  const randomlocation =  getRandomNumber(126)

  const [locationSelect, setLocationSelect] = useState(randomlocation)
  // para cambiar el valor en el input👆
 
  // impotamos el get random
  const url =`https://rickandmortyapi.com/api/location/${locationSelect || getRandomNumber(126)}`
  const [location, getLocation, hasError] = useFetch(url)
  // importamos usefetch y lo desestructuramos

  useEffect(()=>{
    getLocation()
    // ejecutamos getLocation
  },[locationSelect])

  console.log(location)
  return (
    <div className='app_1'>
      <h1 className='app__title'>Rick and Morty</h1>
      <FormSearch
        setLocation={setLocationSelect}
      />

      {
        hasError 
        ? ( <h2 className='app__Error'>✖️You Most Provide An Id From  1 to 126😥</h2>
        ) : (
            <>
             <LocationInfo location={location}/>
              <div className='container-resident'>
              {location?.residents.map( url => (
                  <ResidentCard key={url} url={url}/>
              ) )}
              </div>
              </>
              // el location se usa solo para arreglos
              // en este caso recibe como argumento una funcion collback
            
          
          
        )
      }
      
    </div>
  )
}

export default App