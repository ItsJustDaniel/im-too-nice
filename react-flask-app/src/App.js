import React from "react";
import Mynavbar from "./components/navbar.js";
import Myimage from "./components/scrollsnaps.js";
const App = () => {
  //useEffect(() => {
  //  fetch("/time")
  //    .then((res) => res.json())
  //    .then((data) => {
  //      setCurrentTime(data.time);
  //    });
  //}, []);
  return (
    <div>
      <Mynavbar />
      <Myimage />
    </div>
  );
};

export default App;
