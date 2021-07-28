const CountryData = ({ country, weather }) => {
  let res = (
    <div>
      <div>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
      </div>
      <div>
        <h2>languages</h2>
        <ul>
          {country.languages.map((lang) => (
            <li key={lang.name}>{lang.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={country.flag} width="100" alt="Flag of the country"></img>
      </div>
      <div>
        <h2>Weather in {country.name}</h2>
        <p>
          <b>temperature: </b>
          {weather.temperature}
        </p>
        <img src={weather.weather_icons} alt="Weather icon"></img>
        <p>
          <b>wind: </b>
          {weather.wind_speed} mph direction {weather.wind_dir}
        </p>
      </div>
    </div>
  );
  return res;
};
export default CountryData;
