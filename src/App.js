import { useEffect, useState } from "react";
import "./App.css";
import TripList from "./components/TripList/index";

function App() {
  let [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(false)}>Hide</button>
      {show && <TripList />}
    </>
  );
}

export default App;
