import Timer from "../../components/time/time";
function CurrentTime() {
  return (
    <div className="time page-padding hooks">
      <div className="time-current">
        <h2>Current date and time</h2>
        <p>
          Explain: In this example we are using useState and useEffect hook to
          sync the real date and time.
        </p>
        <Timer />
      </div>
    </div>
  );
}

export default CurrentTime;
