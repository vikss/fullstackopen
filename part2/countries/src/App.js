import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowCountry from "./components/ShowCountry";

const App = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const weather_url =
    "http://api.weatherstack.com/current?access_key=" + api_key + "&query=";
  const url = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({});
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCountry("");
  };

  const handleClick = (event) => {
    filter(event.target.value);
  };

  const filter = (searchTerm) => {
    let res = [];
    res = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (res.length === 1) {
      setCountry(res[0]);
    }
    return res;
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    if (country) {
      let name = country.name;
      axios.get(weather_url + name).then((response) => {
        setWeather(response.data.current);
      });
    }
  }, [country]);

  return (
    <div>
      <div>
        find countries
        <input onChange={handleSearch} value={searchTerm}></input>
        {searchTerm && (
          <ShowCountry
            countries={country || filter(searchTerm)}
            handleClick={handleClick}
            weather={weather}
          ></ShowCountry>
        )}
      </div>
    </div>
  );
};

export default App;
