import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
import { Route, Link, Routes, useParams } from "react-router-dom";
import apiUrl from "../apiUrls";

const Main = (props) => {
  const [displayData, setDisplayData] = useState([]);
  const [music, setMusic] = useState({});
  const [artistName, setArtistName] = useState("");
  const [albumName, setAlbumName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/vinyls/")
      .then((response) => response.json())
      .then((data) => setDisplayData(data.vinyls))
      .catch(() => console.log("Fetch not working"));
  }, []);

  const data1 = displayData.map((i) => {
    return (
      <li>
        {i.albumName} {i.artistName}{" "}
        <Link to="/:id" id={i._id} onClick={() => props.setCurrentAlbum(i._id)}>
          show details
        </Link>
      </li>
    );
  });
  console.log(displayData);

  const handleChangeArtist = (event) => {
    setArtistName(event.target.value);
  };

  const handleChangeAlbum = (event) => {
    setAlbumName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitObject = {
      albumName: albumName,
      artistName: artistName,
    };

    let current = [...displayData];

    fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitObject),
    })
      .then((response) => response.json())
      .then((data) => current.push(data.vinyl))
      .then((data) => console.log(`it worked`, data))
      .then(() => setDisplayData(current))
      .catch(() => {
        console.log("Error:");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} type="text">
        <input onChange={handleChangeArtist} placeholder="Artist"></input>
        <input placeholder="Album" onChange={handleChangeAlbum}></input>
        <input type="submit"></input>
      </form>
      <ul>{data1}</ul>
    </div>
  );
};

export default Main;
