import React from "react";

function Comp(props) {
  const [clicked, setClicked] = React.useState(false);
  const clickEvent = () => {
    setClicked(!clicked);
  };

  const renerHtml = clicked ? (
    <div className="content-data">{props.data}</div>
  ) : null;

  return (
    <div className="content-event">
      <button className="content-button" onClick={clickEvent}>
        {props.title}
      </button>
      {renerHtml}
    </div>
  );
}

export default Comp;
