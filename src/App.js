import React, { useState } from "react";
import "./App.css";
import Presentational from "./components/Presentational";
import data from "./data.json";

const App = () => {
  const [index, changeIndex] = useState(0);
  const verb = data.verbs[index];
  return (
    <div className="App">
      <header className="App-header">
        <Presentational verb={verb} index={index} changeIndex={changeIndex} />
      </header>
    </div>
  );
};

export default App;
