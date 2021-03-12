import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Update from "./routes/Update"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants/:id/update" component={Update} />
          <Route exact path="/restaurants/detail" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
