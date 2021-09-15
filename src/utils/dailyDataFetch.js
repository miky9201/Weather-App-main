import { hourlyDataLayer } from './hourlyDataLayer';
import { dailyDataLayer } from './dailyDataLayer';
import { firstLetterToUppercase } from './firstLetterToUppercase';
import { unixDateConverter } from './unixDateConverter';
import { WEATHER_KEY } from '../config';

export const dailyDataFetch = async (setData, geolocation) => {
      const FRENCH_UNIX_TIMEZONE = 7200;  // UTC +2

      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geolocation.lat}&lon=${geolocation.lng}&lang=fr&units=metric&exclude=minutely&appid=${WEATHER_KEY}`)
      .then( res => res.json())
      .then( data => {
            return { 
                  zone: data.timezone.split("/")[data.timezone.split.length - 1], // city, without zone area
                  timezone: data.timezone_offset, // UTC Local Zone
                  temp: Math.round(data.current.temp) + "°C", // temperature without decimals and in Celsius
                  description: firstLetterToUppercase(data.current.weather[0].description), // Quick weather description (with uppercase)
                  id: data.current.weather[0].id, // id of the kind of weather
                  dt: unixDateConverter(data.current.dt + data.timezone_offset - FRENCH_UNIX_TIMEZONE).fullDate, // date and hour converted from Unix to Normal Format
                  sunrise: unixDateConverter(data.current.sunrise).halfHour,
                  sunset: unixDateConverter(data.current.sunset).halfHour, 
                  wind: data.current.wind_speed,
                  pressure: data.current.pressure,
                  humidity: data.current.humidity, 
                  hourly: hourlyDataLayer(data.hourly), // array of hourly weather
                  daily: dailyDataLayer(data.daily) // array of daily weather
            } 
      })
      .then(object =>setData(object))
      .catch( err => console.log("Votre recherche contient l'erreur suivante :" + err))
}