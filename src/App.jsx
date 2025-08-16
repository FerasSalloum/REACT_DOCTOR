import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="container">
      <div className="mx-4 sm:mx-[10%]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
