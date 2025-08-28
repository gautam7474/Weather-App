import React from "react";
import { useW } from "../context/Weather";

const WBackground = ({ condition }) => {
  if (!condition) return null;

  switch (condition.toLowerCase()) {
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
  const W = useW();
  const data = W.data;

  if (!data) {
    return <div className="card">Loading W...</div>;
  }

  const condition = W.data.current?.condition?.text || "Clear";

  return (
    <div>
      <WBackground condition={condition} />

      <div className="card">
        <img
          src={W?.data.current?.condition?.icon}
          alt={condition}
          className="W-icon"
        />

        <h2 className="W-temp">{W.data.current?.temp_c}° C</h2>

        <h5 className="W-location">
          {W.data.location?.name}, {W.data.location?.region} {W.data.location?.country}
        </h5>

        <p className="W-condition">{condition}</p>

        <div className="W-details">
          <p><strong>Precip:</strong> {W.data.current?.precip_mm} mm</p>
          <p><strong>Humidity:</strong> {W.data.current?.humidity}%</p>
          <p><strong>Wind:</strong> {W.data.current?.wind_kph} kph</p>
          <p>
            <strong>Air quality:</strong>{" "}
            {W.data.current?.air_quality ? "Satisfactory" : "Not available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
