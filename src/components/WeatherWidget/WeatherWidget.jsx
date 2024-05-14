import './WeatherWidger.scss';

const WeatherWidger = () => {
  return (
    <article className="weather-widget">
      <div className="weather-container">
        <div className="weather-infos">
          <h3 className="weather-city">Nantes</h3>
          <p className="weather-zipcode">44000</p>
        </div>
        <div className="weather-temperature">20°</div>
      </div>
    </article>
  );
};

export default WeatherWidger;
