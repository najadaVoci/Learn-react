import Accordion from "../../components/accordion/accordion";
function Accordions() {
  return (
    <div className="accordion page-padding hooks">
      <div className="accordion-current-data">
        <h2>Accordion</h2>
        <p>
          Explain: In this example we are using useState and useEffect hook to
          sync the real date and time.
        </p>
        <Accordion />
      </div>
    </div>
  );
}

export default Accordions;
