import React from "react";
import "./accordion.scss";
import Comp from "./components";

export default function Accordion() {
  const [content, setContent] = React.useState([
    {
      title: "titleeee",
      hiddenDescription: "hiddennnnnn description",
    },
    { title: "test 2", hiddenDescription: "tesss" },
    { title: "ttile 3", hiddenDescription: "hidden " },
  ]);

  const titleContent = content.map((el) => {
    return <p>{el.title}</p>;
  });

  return (
    <div className="content">
      {content.map((el) => {
        return <Comp title={el.title} data={el.hiddenDescription} />;
      })}
    </div>
  );
}
