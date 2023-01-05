import React from "react";
import "./fetch.scss";

function FetchApi() {
  const [data, setData] = React.useState([]);
  console.log("refresh");
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const newData = data.map((el) => {
    return <p>{el.title}</p>;
  });

  return <div className="newData">{newData}</div>;
}

export default function FetchData() {
  return (
    <>
      <FetchApi />
    </>
  );
}
