// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    // <div className="App">
    //   <Home/>
    // </div>
    <div className="App">
    <Router>

<Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/productList">
      <ProductList/>
      </Route>
      <Route path="/product/:id">
         <ProductDetail/>
      </Route>
    </Switch>

</Router>
    </div>
  );
}

export default App;
