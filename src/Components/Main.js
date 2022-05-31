import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/vinyls/")
      .then((response) => response.json())
      .then((data) => setDisplayData(data.vinyls))
      .catch(() => console.log("Fetch not working"));
  }, []);

  const data1 = displayData.map((i) => {
    return (
      <li>
        {i.albumName} --- {i.artistName}
      </li>
    );
  });
  console.log(displayData);

  return (
    <div>
      <ul>{data1}</ul>
    </div>
  );
};

export default Main;
