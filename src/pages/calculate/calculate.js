import Calculate from "../../components/calcuate/calcuate";
function CalculateTheSum() {
  return (
    <div className="calc page-padding hooks">
      <div className="calc-sum">
        <h2>Calculate the sum of two numbers</h2>
        <p>
          Explain: Here we have a list of item and when we click each element,
          the color change.
        </p>
        <Calculate />
      </div>
    </div>
  );
}

export default CalculateTheSum;
