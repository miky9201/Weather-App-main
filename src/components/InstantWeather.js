import './InstantWeather.css';
import sunrise from '../images/indicators/sunrise.png';
import sunset from '../images/indicators/sunset.png';
import wind from '../images/indicators/wind.png';
import pressure from '../images/indicators/pressure.png';
import humidity from '../images/indicators/humidity.png';

const InstantWeather = ({ instantWeatherData }) => {
      return (
            instantWeatherData ?
                  <>
                        <h2>{instantWeatherData.zone}</h2>
                        <p>{instantWeatherData.description} / {instantWeatherData.temp}</p>
                        <p>{instantWeatherData.dt}</p>
                        <div className="indicators-container">
                              <img width="35px" src={sunrise} alt="sunrise" />&nbsp;<p>{instantWeatherData.sunrise}</p>&nbsp;&nbsp;
                              <img width="35px" src={sunset} alt="sunset" />&nbsp;<p>{instantWeatherData.sunset}</p>
                        </div>
                        <div className="indicators-container">
                              <img width="27px" src={wind} alt="wind" />&nbsp;<p>{instantWeatherData.wind} m/seconde</p>
                        </div>
                        <div className="indicators-container">
                              <img width="27px" src={pressure} alt="pressure" />&nbsp;<p>{instantWeatherData.pressure} hPa</p>&nbsp;&nbsp;&nbsp;&nbsp;
                              <img width="27px" src={humidity} alt="humidity" />&nbsp;<p>{instantWeatherData.humidity} %</p>
                        </div>
                  </>
            : null
      )
}

export default InstantWeather;