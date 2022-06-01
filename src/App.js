import "./App.css";
import { Route, Link, Routes, useParams } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Main from "./Components/Main";
import Post from "./Components/Post";
import Details from "./Components/Details";

function App() {
  return (
    <div className="App">
      <Link to="/"> Home </Link>
      <Link to="/vinyls"> Vinyls </Link>
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Details id={props.id} />} />
        <Route path="/vinyls" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
