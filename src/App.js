import './App.css';
import Nav from "./Nav";
import Routes from "./Routes";

import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
        <Nav/>
        <Routes/>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
