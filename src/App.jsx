import { Component } from "react";
import "./index.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

class App extends Component {
  render() {
    return (
      <div className="relative z-0 main-container">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
