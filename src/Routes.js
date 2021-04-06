import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import DogList from "./DogList";
import Dog from "./Dog";
import Color from "./Color";
import whiskey from "./static/whiskey.jpg";
import duke from "./static/duke.jpg";
import perry from "./static/perry.jpg";
import tubby from "./static/tubby.jpg"
import ColorFactory from "./ColorFactory";
import NewColorForm from "./NewColorForm";

const Routes = ({dogs, startColors}) => {
  const [colors, updateColors] = useState(startColors);

  const handleAdd = (newColor) => {
    updateColors(colors => ({...colors, ...newColor}));
  }
  const renderColorSelect = (props) => {
    const { color } = props.match.params;
    const value = colors[color];
    return <Color {...props} value={value} color={color} />;
  }
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs}/>
      </Route>
      <Route exact path="/dogs/:name">
        <Dog dogs={dogs}/>
      </Route>
      <Route exact path="/colors">
          <ColorFactory colors={colors}/>
      </Route>
      <Route exact path="/colors/new">
        <NewColorForm updateColors={handleAdd}/>
      </Route>
      <Route exact path="/colors/:color" render={renderColorSelect}></Route>
      <Redirect to="/dogs" />
    </Switch>
  );
};

Routes.defaultProps = {
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

export default Routes;
