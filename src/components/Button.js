import { motion } from "framer-motion";
import './Button.css';

const Button = ({ isDailyData, setDatasType }) => {
      const handleClick = () => {
            setDatasType(!isDailyData)
      }
      return <motion.button whileHover={{ scale: 1.1 }} className="rainbow-button" onClick={handleClick}>{isDailyData ? "Prévisions sur 7 Jours" : "Prévision sur 24h"}</motion.button>
}

export default Button;