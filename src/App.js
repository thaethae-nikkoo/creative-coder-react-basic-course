import { useCallback, useEffect, useState } from "react";
import "./App.css";
import TripList from "./components/TripList/index";

function App() {
  let [show, setShow] = useState(true);
  let [data, setData] = useState("mydata");

  let myFun = () => {
    setData("update data");
  };
  useEffect(() => {
    myFun();
    console.log("running");
  }, [myFun]);

  return (
    <>
      <h1>{data}</h1>
      <button onClick={() => setShow(false)}>Hide</button>
      {show && <TripList />}
    </>
  );
}

export default App;
