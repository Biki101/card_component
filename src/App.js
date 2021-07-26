import { Route, Switch } from "react-router-dom";
import "./App.css";
import Card from "./component/card-component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Card} />
      </Switch>
    </div>
  );
}

export default App;
