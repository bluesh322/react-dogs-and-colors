import './App.css';
import Nav from "./Nav";
import Routes from "./Routes";
import whiskey from "./static/whiskey.jpg";
import duke from "./static/duke.jpg";
import perry from "./static/perry.jpg";
import tubby from "./static/tubby.jpg"

import { BrowserRouter } from "react-router-dom"

function App({dogs, startColors}) {
  return (
    <div className="App">
      <>
      <BrowserRouter>
        <Nav/>
        <Routes dogs={dogs} startColors={startColors}/>
      </BrowserRouter>
      </>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
  startColors:
      {
          red: "#FF0000",
          blue: "#0000FF",      
          green: "#00FF00",
      }
};

export default App;
