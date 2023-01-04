import React from "react";

export default function UseCallback() {
  const [nr1, setNr1] = React.useState("10");
  const [nr2, setNr2] = React.useState("100");
  const [rs, stRs] = React.useState(0);

  const sum = React.useCallback(() => nr1 + nr2 + Math.random(), [nr1, nr2]);
  React.useEffect(() => {
    const value = sum();
    stRs(value);
  }, [sum]);

  return (
    <div>
      <p>{rs}</p>
    </div>
  );
}
