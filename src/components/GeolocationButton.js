import './GeolocationButton.css';
import { getGeolocation } from '../utils/getGeolocation';
import { motion } from "framer-motion";
import geologo from '../images/geo-logo.png';

const GeolocationButton = ({ setGeolocation, setIsModalDisplayed, version }) => {

      const handleClick = () => {
            getGeolocation(setGeolocation, setIsModalDisplayed)
      }
      
      return (
            <motion.button whileHover={{scale: 1.1}} className={"geo-button " + version} onClick={handleClick}>
                  <img  src={geologo} width="25px" alt="rainy" />
            </motion.button>
      )
}

export default GeolocationButton;