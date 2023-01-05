import FetchData from "../../components/fetch/fetch";

function JSONPlaceholderData() {
  return (
    <div className="fetch page-padding hooks">
      <div className="fetch-title-selected">
        <h2>Fetch Api from JSONPlaceholder</h2>
        <p>
          Explain: In this example we are using fetch data from an API and
          displaying in the browser all the data that has the key title. This
          will be done by using useEffect hook.
        </p>
        <FetchData />
      </div>
    </div>
  );
}

export default JSONPlaceholderData;
