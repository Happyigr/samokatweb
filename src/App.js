import React from "react";
import { Banner, Navbar, Info, Speed, Design } from "./blocks";

import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Info />
      <Speed />
      <Design />
    </div>
  );
}

export default App;
