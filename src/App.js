// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";
import { createContext, useState } from "react";
import Login from "./components/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/productList">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
