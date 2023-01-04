import React from "react";

function ListItem(props) {
  const name = props.item.name;
  const id = props.item.id;
  const isClicked = props.item.isClicked;
  const parentCallbackFN = props.cb;
  //Per te ndryshuar ngjyren e elem te klikuar perdor ternary operator.
  const colorX = isClicked ? "green" : "red";
  const handleClick = () => {
    console.log("cl");
    parentCallbackFN(id);
  };
  return (
    <li onClick={handleClick} style={{ color: colorX }}>
      {name}
    </li>
  );
}

export default ListItem;
