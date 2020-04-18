import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Book({ name }) {
  return (
    <div
      style={{
        width: "100px",
        height: "350px",
        border: "1px solid black",
        borderRadius: 4,
      }}
    >
      {name}
    </div>
  );
}

class App extends React.Component {
  componentDidMount() {
    fetch("/api/v1/books")
      .then((res) => res.json())
      .then(console.log)
      .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
      </div>
    );
  }
}

export default App;
