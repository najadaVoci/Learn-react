import React from "react";
import "./useEffect.scss";

import NewData from "./components";
import { fakeData } from "./fakeData";
export default function UseEffect() {
  //krijojme useState, i cili do te mbaje te dhenat qe na vijne nga file fakeData
  //dhe ia kalojme child-it keto te dhena si props
  const [data, setData] = React.useState(fakeData);

  return (
    <div className="ul-list">
      <NewData arrayWithData={data} />
    </div>
  );
}
