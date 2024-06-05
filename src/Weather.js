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

     if (weather.current.temperature_2m > 20) {
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
          <div>{weather.current.temperature_2m}</div>
        </Col>
      </Row>
      <Row >
        <Col>
          <div>Wind speed:</div>
        </Col>
        <Col>
          <div>{weather.current.wind_speed_10m}</div>
        </Col>
          </Row>
        <Row >
        <Col>
          <div>Precipitation:</div>
        </Col>
        <Col>
          <div>{weather.current.precipitation}</div>
        </Col>
     </Row>
    <Row >
        <Col>
          <div>Showers:</div>
        </Col>
        <Col>
           <div>{weather.current.precipitation.showers}</div>
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