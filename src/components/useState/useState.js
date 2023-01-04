import React from "react";
import "./useState.scss";

import ListItem from "./listElement";
export default function UseState() {
  const [items, setItems] = React.useState([
    { id: 1, name: "UseState", isClicked: false },
    { id: 2, name: "ClickEvent", isClicked: false },
    { id: 3, name: "Props", isClicked: false },
  ]);

  const clickHandler = (id) => {
    console.log("ID CLIKED", id);
    // Per te transformuar array-in fillestar perdorim map method
    const newData = items.map((singleItem) => {
      // console.log(singleItem.id); //kap id 1,2,3
      if (singleItem.id === id) {
        return { ...singleItem, isClicked: !singleItem.isClicked };
      } else {
        return singleItem;
      }
    });

    console.log("==>", newData);
    setItems(newData);
  };
  return (
    <div className="ul-list">
      <ul>
        {items.map((elemOfItems) => {
          return <ListItem cb={clickHandler} item={elemOfItems} />;
        })}
      </ul>
    </div>
  );
}
