import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import apiUrl from "../apiUrls";

const Post = () => {
  const [album, setAlbum] = useState({});
  let submitObject = {};

  const handleSubmit = (event) => {
    event.preventDefault();
    submitObject = {
      albumName: event.nativeEvent.target[0].value,
      artistName: event.nativeEvent.target[1].value,
    };

    fetch(`${apiUrl}vinyls`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitObject),
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
        <input></input>
        <input></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Post;
