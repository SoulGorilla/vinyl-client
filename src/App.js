import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Link to="/"> Home </Link>
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
