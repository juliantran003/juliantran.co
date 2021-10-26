import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import Home from "./containers/Home";
import Discography from "./containers/Discography";
import Contact from "./containers/Contact";

// Components
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/discography">
          <Discography />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
