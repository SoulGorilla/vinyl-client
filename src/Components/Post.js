import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Post = () => {
  const [album, setAlbum] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setAlbum({
      albumName: event.nativeEvent.target[0].value,
      artistName: event.nativeEvent.target[1].value,
    });

    fetch("https://localhost:3000/vin", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log(album);
  return (
    <div>
      <form onSubmit={handleSubmit} type="text">
        <input onChange={handleChange}></input>
        <input></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Post;
