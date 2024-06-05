import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import './App.css';
import beachTime from './images/beach_time.gif'
import noBeachTime from './images/noBeach_time.gif'

function Weather({ weather, city }) {
  if (!weather) {
    return <h3 className="clickOnCity">Click on city</h3>;
  }

  let backgroundStyle = 'defaultStyle';

     if (weather.current_weather.temperature > 20) {
    backgroundStyle = 'beach';
     } else {
         backgroundStyle = 'noBeach';
    }
    
 

  return (
      <div className={backgroundStyle}>
          <div className="weather-main">
      <Row >
        <Col>
          <div>Temperature:</div>
        </Col>
        <Col>
          <div>{weather.current_weather.temperature}</div>
        </Col>
      </Row>
      <Row >
        <Col>
          <div>Wind speed:</div>
        </Col>
        <Col>
          <div>{weather.current_weather.windspeed}</div>
        </Col>
          </Row>
        <Row >
        <Col>
          <div>Precipitation:</div>
        </Col>
        <Col>
          <div>{weather.current_weather.precipitation} {weather.current_weather.showers} {weather.current_weather.rain}</div>
        </Col>
     </Row>
    <Row >
        <Col>
          <div>Precipitation Probability:</div>
        </Col>
        <Col>
            <div>{weather.current_weather.precipitation_probability}</div>
        </Col>
          </Row>
          </div>
     {backgroundStyle === 'beach' && (
        <img src={beachTime} alt="beachtime" className="background-image" />
      )}
      {backgroundStyle === 'noBeach' && (
        <img src={noBeachTime} alt="nobeachtime" className="background-image" />
              )}
             

    </div>
  );
}

export default Weather; 