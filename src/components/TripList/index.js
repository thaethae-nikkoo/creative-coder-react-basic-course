import React, { useEffect, useState } from "react";

export default function TripList() {
  let [trips, setTrips] = useState([]);
  //   fetch("http://localhost:3001/trips")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });

  useEffect(() => {
    fetch("http://localhost:3001/trips")
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      });
  }, []);

  return (
    <div>
      <h1>Ready to go</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.name}</h3>
            <p>price - {trip.price} MMK</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
