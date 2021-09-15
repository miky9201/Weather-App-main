import { motion } from "framer-motion";
import './Logo.css';
import logo from '../images/logo.svg';

const Logo = ({ version }) => {
      return <motion.img whileHover={{ scale: 1.1 }} className={version + " logo"} src={logo} alt="logo" />
}

export default Logo;