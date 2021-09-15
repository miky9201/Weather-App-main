import React, { useState, useEffect } from 'react';
import { queryFetch } from '../utils/queryFetch';
import { dailyDataFetch } from '../utils/dailyDataFetch';
import { motion } from "framer-motion";
import './ResearchBar.css';

const ResearchBar = ({ setWeatherData, setIsModalDisplayed }) => {

      const [query, setQuery] = useState("")
      const [queryCoords, setQueryCoords] = useState({lat: 0, lng: 0})

      const handleChange = (e) => {
            setQuery(e.target.value)
      }

      const handleSubmit = async (e) => {
            e.preventDefault()
            queryFetch(query, setQueryCoords, setIsModalDisplayed)
      }

      useEffect(() => {
            dailyDataFetch(setWeatherData, queryCoords)
      }, [setWeatherData, queryCoords])
      
      return (
            <form onSubmit={handleSubmit} className="search-container">
                  <label className="search-label" htmlFor="site-search">Choisissez Votre Ville</label>
                  <input className="search-bar" onChange={handleChange} type="search" aria-label="Barre de recherche" placeholder="Berlin"/>
                  <motion.input whileHover={{ scale: 1.1 }} className="search-button" type="submit" value="Rechercher" />
            </form>
      )
}

export default ResearchBar;