import { unixDateConverter } from '../utils/unixDateConverter';
import { firstLetterToUppercase } from '../utils/firstLetterToUppercase';
import './WeatherDatas.css';

const WeatherDatas = ({ isDailyData, weatherData, timezone }) => {
      const FRENCH_UNIX_TIMEZONE = 7200; // UTC +2 
      return (
            weatherData ?
                  weatherData.map((item, index) => 
                        <div key={index} className="data-container">
                              <div className="case">{isDailyData ? 
                                          unixDateConverter(item.dt + timezone - FRENCH_UNIX_TIMEZONE).halfHour 
                                    : 
                                          unixDateConverter(item.dt + timezone - FRENCH_UNIX_TIMEZONE).halfDate
                                    }
                              </div>
                              <div className="case">{firstLetterToUppercase(item.weather[0].description)}</div>
                              {isDailyData ?
                                    <div className="case">{Math.round(item.temp)}°C</div>
                              :
                                    <>
                                          <div className="case">Matin : {Math.round(item.temp.morn)}°C</div>
                                          <div className="case">Soir : {Math.round(item.temp.eve)}°C</div>
                                    </>
                              }
                        </div>
                  )
            : null
      )
}

export default WeatherDatas;