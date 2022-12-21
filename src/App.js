import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/components/Login"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
         
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
