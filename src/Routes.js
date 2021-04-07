import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import DogList from "./DogList";
import Dog from "./Dog";
import Color from "./Color";
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



export default Routes;
