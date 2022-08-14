import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import RouteList from "./RouteList";

function App() {
  return (
    <div className="App">
      <Header/>
      <RouteList />
      <Footer/>
    </div>
  );
}

export default App;
