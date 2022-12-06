import React from "react";
import Footer from "./components/footer/Footer";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
}

export default App;