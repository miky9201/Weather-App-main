import { weatherClassnameSelector } from '../utils/weatherClassnameSelector';
import './SideContainer.css';

const SideContainer = ({ width, weatherId, title, children }) => {
      return (
            <div className={weatherClassnameSelector(weatherId) + " side-container w-" + width}>
                  <h2>{title}</h2>
                  {children}
            </div>
      )
}

export default SideContainer;