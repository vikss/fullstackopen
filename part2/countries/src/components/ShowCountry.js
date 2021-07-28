import CountryData from "./CountryData";
const ShowCountry = (props) => {
  let countries = props.countries;
  let weather = props.weather;

  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  else if (!Array.isArray(countries)) {
    return <CountryData country={countries} weather={weather}></CountryData>;
  } else {
    countries = countries.map((country) => (
      <div key={country.name}>
        {country.name}
        <button onClick={props.handleClick} value={country.name}>
          show
        </button>
      </div>
    ));
    return <div>{countries}</div>;
  }
};
export default ShowCountry;
