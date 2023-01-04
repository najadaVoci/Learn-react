import "./homepage.scss";
function Homepage() {
  return (
    <div className="home">
      <h1>Resource Library</h1>
      <div className="links">
        <a href="/hooks">Hooks</a>
        <a href="/todo">Todo</a>
      </div>
    </div>
  );
}

export default Homepage;
