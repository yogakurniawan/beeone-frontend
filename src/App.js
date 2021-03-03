import { useEffect } from "react";
import { normalizedData } from "./lib";
import "./App.css";

function App() {
  useEffect(() => {
    console.log(normalizedData);
  });

  return (
    <div className="App">
      <nav className="bg-gray-800">Hello world</nav>
    </div>
  );
}

export default App;
