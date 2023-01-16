import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/components/Login_Register/Login";
import Register from "./components/Login_Register/Register";
import Home from "./components/Home/Home";
import Content from "././components/Home/Options/Content";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path={["/home", "/home/:options"]} component={Home} />
          <Route exact path="/home/content" component={Content} />
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
