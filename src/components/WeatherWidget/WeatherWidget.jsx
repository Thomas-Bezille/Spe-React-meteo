import PropTypes from 'prop-types';
import { useState } from 'react';

import './WeatherWidger.scss';

const WeatherWidget = ({ zipCode, city }) => {
  const [temperature, setTemperature] = useState('-');

  return (
    <article className="weather-widget">
      <div className="weather-container">
        <div className="weather-infos">
          <h3 className="weather-city">{city}</h3>
          <p className="weather-zipcode">{zipCode}</p>
        </div>
        <div className="weather-temperature">{temperature}</div>
      </div>
    </article>
  );
};

WeatherWidget.propTypes = {
  zipCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default WeatherWidget;
