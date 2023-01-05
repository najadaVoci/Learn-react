import React from "react";
import "./calculate.scss";

export default function Calculate() {
  const [input1, setInput1] = React.useState(0);
  const [input2, setInput2] = React.useState(0);
  const [result, setResult] = React.useState(0);
  React.useEffect(() => {
    console.log(input1, input2);
    const totalSum = Number(input1) + Number(input2);
    //meqe input1 dhe input2 jane string-e atehere perdorim Number() method ti kthejme ne nr
    //dhe ti mbledhim
    setResult(totalSum);
  }, [input1, input2]);

  return (
    <div className="input-value">
      <input
        type="number"
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      />
      <p className="operator">+</p>
      <input
        type="number"
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      />
      <p className="operator">=</p>
      <p className="result">{result}</p>
    </div>
  );
}
