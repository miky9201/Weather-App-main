import {WEATHER_KEY} from '../config';

export const queryFetch = async (query, setQueryCoords, setIsModalDisplayed) => {  
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&lang=fr&appid=${WEATHER_KEY}`)
      .then( res => res.json())
      .then( data => {
            setQueryCoords({
                  lat: data.coord.lat,
                  lng: data.coord.lon
            })
            setIsModalDisplayed && setIsModalDisplayed(false)
      })
      .catch( err => console.log("Votre recherche contient l'erreur suivante :" + err))
}