import React from "react";
import "./useMemo.scss";

function generateRandomValue(nr) {
  let randomNr = 0;
  for (let i = 0; i < 10000000; i++) {
    randomNr = randomNr + Math.random() + nr;
  }
  return randomNr;
}

export default function useMemo() {
  const [insput, setInput] = React.useState("");
  const [nr, setNr] = React.useState(0);

  const value = React.useMemo(() => {
    return generateRandomValue(nr);
  }, [nr]);

  return (
    <div className="input-current-value">
      <input
        value={insput}
        onChange={(e) => {
          setInput(e.target.value);
          if (e.target.value.length > 4) {
            setNr(10);
          }
        }}
      />
      <p>{value}</p>
    </div>
  );
}
