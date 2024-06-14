import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { fetchWeatherData, getAddressLocation } from "./Utilities.js";
import Weather from "./Weather.js";
import NewLocation from "./NewLocation.js";

function App() {
  const [cities, setCities] = useState([
    {
      name: "Tallinn",
      lat: 59.437,
      long: 24.75,
      weatherData: null,
    },
    {
      name: "Pärnu",

      weatherData: null,
    },
    {
      name: "Tartu",

      weatherData: null,
    },
    {
      name: "Sidney",

      weatherData: null,
    },
  ]);

  const addLocation = (location) => {
    setCities([
      ...cities,
      {
        name: location,
        weatherData: null,
      },
    ]);
    setIsAddingActive(false);
    setActiveLocation(cities.length - 1);
  };
  const [activeCity, setActiveCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isAddingActive, setIsAddingActive] = useState(true);
  const [activeLocation, setActiveLocation] = useState(0);
  const loadLocationData = async (index) => {
    const city = cities[index];
    try {
      const locationData = await getAddressLocation(city.name);
      console.log(locationData);
      const dataObj = await fetchWeatherData({
        lat: locationData.lat,
        long: locationData.lng,
      });
      setWeather(dataObj);
    } catch (error) {
      console.log(error.message);
      setWeather({ error: error.message });
    }
  };

  const rowClicked = async (index) => {
    const city = cities[index];
    setIsAddingActive(false);
    setActiveCity(city.name);

    setActiveLocation(index);
  };

  let rightPaneJsx = (
    <>
      <Weather weather={weather} city={activeCity} />
    </>
  );
  if (isAddingActive) {
    rightPaneJsx = <NewLocation addLocation={addLocation} />;
  }
  return (
    <Container>
      <Row>
        <Col lg="2" className="leftPan">
          <h2 className="leftPanCities">Cities</h2>
          <div className="leftPanCity">
            {cities.map((city, index) => (
              <div
                className={
                  activeCity === city.name
                    ? "nav-item nav-item__active"
                    : "nav-item"
                }
                key={index}
                onClick={() => rowClicked(index)}
              >
                {city.name}
              </div>
            ))}
            <button
              className="btn btn-link"
              onClick={() => setIsAddingActive(true)}
            >
              Add Location
            </button>
          </div>
        </Col>
        <Col lg="8" className="rightPan">
          <h3 className="rightPanCW">Current weather in</h3>
          <h2 className="rightPanCity">{activeCity}</h2>
          {rightPaneJsx}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
