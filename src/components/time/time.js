import React from "react";
import "./time.scss";

export default function Timer() {
  const [date, setDate] = React.useState("");

  const getCurrentDateTime = () => {
    var currentdate = new Date();
    var dateTime =
      "Last Sync: " +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    setDate(dateTime);
  };

  React.useEffect(() => {
    console.log("time");
    setInterval(() => {
      getCurrentDateTime();
    }, 1000);
  }, []);

  return <div className="current-time">{date}</div>;
}
