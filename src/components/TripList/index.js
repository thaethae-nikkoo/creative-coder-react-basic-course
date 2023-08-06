import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./index.css";
export default function TripList() {
  //   let [trips, setTrips] = useState([]);
  let [url, setUrl] = useState("http://localhost:3001/trips");
  //   let fechTrips = useCallback(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTrips(data);
  //       });
  //   }, [url]);

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTrips(data);
  //       });
  //   }, [url]);
  //   console.log(trips);
  let { data: trips, loading, error } = useFetch(url, { type: "GET" });
  console.log(trips);
  return (
    <div className="container">
      {error && <p>Something went wrong</p>}
      {!error && (
        <div className="flex-container">
          <h1>Ready to go</h1>
          {loading && <p>Loading trips</p>}
          <div>
            <button onClick={() => setUrl("http://localhost:3001/trips")}>
              all
            </button>
            <button
              onClick={() =>
                setUrl("http://localhost:3001/trips?location=Myanmar")
              }
            >
              Trips in Myanamr
            </button>
            <button
              onClick={() =>
                setUrl("http://localhost:3001/trips?location=Thailand")
              }
            >
              Trips in Thailand
            </button>
          </div>

          <ul className="trips-list">
            {trips &&
              trips.map((trip) => (
                <li key={trip.id} className="trip">
                  <h3>{trip.name}</h3>
                  <p>price - {trip.price} MMK</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
