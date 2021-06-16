import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";
import { createContext, useState } from "react";
import Login from "./components/Login/Login";
import AddProduct from "./components/Home/AddProduct/AddProduct";
import PrivateRoute from "./components/Login/PrivateRoute";

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
          <PrivateRoute path="/product/:id">
            <ProductDetail />
          </PrivateRoute>
          <Route path="/addProduct">
             <AddProduct/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
