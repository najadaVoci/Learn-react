import "./homepage.scss";
function Homepage() {
  return (
    <div className="home">
      <h1>Resource Library</h1>
      <div className="links">
        <a href="/hooks">Hooks</a>
        <a href="/calculate">Calculate the sum of two numbers</a>
        <a href="/fetch">Fetch Api</a>
        <a href="/time">Current date and time</a>
        <a href="/accordion">Accordion</a>
      </div>
    </div>
  );
}

export default Homepage;
