import { useEffect } from "react";
import "./App.css";
import TripList from "./components/TripList/index";

function App() {
  useEffect(() => {
    console.log("run first time");
  }, []);
  // return <TripList />;
}

export default App;
