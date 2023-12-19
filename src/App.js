import "../src/App.css";

function App() {
  const name = "쿼카";
  return (
    <div>
      {name === "쿼카" ? <h1>쿼카입니다.</h1> : <h2>쿼카가 아닙니다.</h2>}
    </div>
  );
}

export default App;
