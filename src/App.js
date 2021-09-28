import React from "react";
import { useState } from "react";
import "./styles.css";

const travelBl = {
  Mumbai: [
    { name: "The Gateway of India", rating: "4/5" },
    { name: "Sidhi Vinayak Temple", rating: "5/5" },
    { name: "Marine Drive", rating: "4/5" }
  ],
  Delhi: [
    { name: "Connaught Place", rating: "3/5" },
    { name: "Red Fort", rating: "4/5" },
    { name: "Laxmi Narayan Birla Temple", rating: "5/5" }
  ],
  Chandigarh: [
    { name: "Rock Garden", rating: "2/5" },
    { name: "Elante", rating: "4/5" },
    { name: "Chandi Devi Temple", rating: "5/5" }
  ]
};

export default function App() {
  const [selectCity, setCity] = useState("Mumbai");
  function cityClickhandler(City) {
    setCity(City);
  }
  return (
    <div className="App">
      <h1>😎 My Travel Experiences</h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        Take a look on my tour to some of the wonderlands in our Incredible
        Bharat !!!. Select a city to get started{" "}
      </p>

      <div>
        {Object.keys(travelBl).map((City) => (
          <button
            onClick={() => cityClickhandler(City)}
            style={{
              cursor: "pointer",
              background: "#D1D5DB",
              borderRadius: "0.5rem",
              padding: "0.2rem  1rem",
              border: "2px solid blue",
              margin: "1rem 1rem"
            }}
          >
            {City}
          </button>
        ))}
      </div>

      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelBl[selectCity].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "80%",
                margin: "1rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "smaller" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
