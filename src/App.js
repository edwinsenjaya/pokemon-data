import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./pages/Home";
// import Favorites from "./views/Favorites";
// import Photo from "./views/Photo";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        {/* <Route path="/photo/:id">
          <Photo />
        </Route> */}
        {/* <Route path="/favorites">
          <Favorites />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
