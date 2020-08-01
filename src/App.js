import React from "react";
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import ServicesList from "./components/ServicesComponent";
// import Main from "./components/MainComponent";
// import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesList />
      <Footer />
    </div>
  );
}

export default App;
