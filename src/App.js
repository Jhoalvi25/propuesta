import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/components/Login"
import Home from "../src/components/Home"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
