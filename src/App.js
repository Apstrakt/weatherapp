import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { fetchWeatherData } from './Utilities.js';
import Weather from './Weather.js';

function App() {
  const [cities, setCities] = useState([
    {
      name: 'Tallinn',
      lat: 59.437,
      long: 24.75,
      weatherData: null
    },
    {
      name: 'Pärnu',
      lat: 58.391,
      long: 24.4953,
      weatherData: null
    },
    {
      name: 'Tartu',
      lat: 58.3780,
      long: 26.7290,
      weatherData: null
    },
     {
      name: 'Sidney',
      lat: 33.8688,
      long: 151.2093,
      weatherData: null
    },
  ]);

  const [activeCity, setActiveCity] = useState(null);
  const [weather, setWeather] = useState(null);

  const rowClicked = async (index) => {
    const city = cities[index];
    setActiveCity(city.name);
    const dataObj = await fetchWeatherData({ lat: city.lat, long: city.long });
    setWeather(dataObj);
  };

  return (
    <Container>
      <Row >
        <Col lg="2" className="leftPan">
          <h2 className="leftPanCities">Cities</h2>
          <div className='leftPanCity'>
          {cities.map((city, index) => (
            <div className={activeCity === city.name ? 'nav-item nav-item__active' : 'nav-item'}  key={index} onClick={() => rowClicked(index)} >
              {city.name}
            </div>
          ))}
            </div>
        </Col>
        <Col lg="8" className="rightPan">
          <h3 className="rightPanCW">Current weather in</h3>
          <h2 className="rightPanCity">{activeCity}</h2>
          <Weather weather={weather} city={activeCity} />
        </Col>
      </Row>
    </Container>
  );
}

export default App