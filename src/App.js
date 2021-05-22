import "./App.css";
import Linktree from "./containers/Linktree";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/linktree">
          <Linktree />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
