import React, { useState, useEffect } from 'react';
import MainContainer from './components/MainContainer';
import SideContainer from './components/SideContainer';
import InstantWeather from './components/InstantWeather';
import WeatherDatas from './components/WeatherDatas';
import Button from './components/Button';
import ResearchBar from './components/ResearchBar';
import GeolocationButton from './components/GeolocationButton';
import Modal from './components/Modal';
import Logo from './components/Logo';
import { dailyDataFetch } from './utils/dailyDataFetch';
import './App.css';

const App = () => {
      const [ geolocation, setGeolocation ] = useState({lat: 0, lng: 0}) // default geolocation (GMT)
      const [ weatherData, setWeatherData ] = useState({})
      const [ isDailyData, setIsDailyData ] = useState(true)
      const [ isModalDisplayed, setIsModalDisplayed ] = useState(true)

      useEffect(() => {
            dailyDataFetch(setWeatherData, geolocation)
      }, [setWeatherData, geolocation])
      
      return (
            <div>
                  {isModalDisplayed ?
                        <Modal >  
                              <Logo />
                              <ResearchBar setWeatherData={setWeatherData} setIsModalDisplayed={setIsModalDisplayed} />
                              <GeolocationButton setGeolocation={setGeolocation} setIsModalDisplayed={setIsModalDisplayed} />
                        </ Modal> 
                  : null
                  }
                  <Logo version="app-logo" />
                  <ResearchBar setWeatherData={setWeatherData}  />
                  <GeolocationButton version="app-geo" setGeolocation={setGeolocation}  />
                  <MainContainer>
                        <SideContainer width="40" weatherId={weatherData.id}>
                              <InstantWeather instantWeatherData={weatherData} />
                        </ SideContainer>
                        <SideContainer width="60" title={isDailyData ? "Prévisions sur 24h" : "Prévisions sur 7 jours"}>              
                              <WeatherDatas isDailyData={isDailyData} weatherData={isDailyData ? weatherData.hourly : weatherData.daily} timezone={weatherData.timezone}/>
                              <Button isDailyData={isDailyData} setDatasType={setIsDailyData} />
                        </ SideContainer>
                  </MainContainer>
                  
            </div>
      )
}

export default App;
