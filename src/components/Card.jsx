import React from "react";
import { useW } from "../context/Weather";

const WBackground = ({ condition }) => {
  if (!condition) return null;

  const lower = condition.toLowerCase();

  let type = "clear";
  if (lower.includes("cloud")) type = "clouds";
  else if (lower.includes("rain")) type = "rain";
  else if (lower.includes("snow")) type = "snow";
  else if (lower.includes("sun") || lower.includes("clear")) type = "clear";

  switch (type) {
    case "clear":
      return (
        <div className="W-bg">
          <div className="sun"></div>
        </div>
      );

    case "clouds":
      return (
        <div className="W-bg">
          <div className="cloud small"></div>
          <div className="cloud medium"></div>
          <div className="cloud large"></div>
        </div>
      );

    case "rain":
      return (
        <div className="W-bg">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="rain-drop"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random()}s`,
                animationDuration: `${0.5 + Math.random()}s`,
              }}
            ></div>
          ))}
        </div>
      );

    case "snow":
      return (
        <div className="W-bg">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="snowflake"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              ❄
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
};


const Card = () => {
  const { data } = useW();

  if (!data) return <p>Loading...</p>;

  const { location, current } = data;

  return (
    <div className="card">
      <div className="weather-icon">
        <img src={current.condition.icon} alt={current.condition.text} />
      </div>
      <h2>{current.temp_c}° C</h2>
      <h3 className="W-location">
        {location.name}, {location.region}, {location.country}
      </h3>
      <p className="W-condition">{current.condition.text}</p>

      <div className="W-details">
        <p>Precip: {current.precip_mm} mm</p>
        <p>Humidity: {current.humidity}%</p>
        <p>Wind: {current.wind_kph} kph</p>
        <p>Air quality: {current.air_quality["us-epa-index"]}</p>
      </div>
    </div>
  );
};

export default Card;
