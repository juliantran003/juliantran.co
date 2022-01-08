import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import Home from "./containers/Artist/Home";
import Discography from "./containers/Artist/Discography";
import Media from "./containers/Artist/Media";
import Contact from "./containers/Artist/Contact";
import About from "./containers/Artist/About";

// Components
import Menu from "./components/Artist/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/media">
          <Media />
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
