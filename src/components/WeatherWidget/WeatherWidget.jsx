import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './WeatherWidger.scss';

const WeatherWidget = ({ zipCode, city }) => {
  const [temperature, setTemperature] = useState('-');

  useEffect(() => {
    axios
      .get('http://localhost:3001')
      .then((response) => {
        const temperatureFromApi = response.data.main.temp;
        setTemperature(`${Math.round(temperatureFromApi)}°`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [zipCode]);

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
