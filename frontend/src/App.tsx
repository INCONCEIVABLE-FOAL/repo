import React from 'react';
import logo from './logo.svg';
import './style.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Product from './Products/Products';
import Home from './Home/Home';
import data from './Products/data';
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetails';
import Products from './Products/Products';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open")
  }

  return (
    <div className="content">
      
    
      <ul className="products">
      {
    Products.map((product) => (
      <li key={product.id}>
        <div className="product">
          <img className="product-image" src={product.imageUrl} alt="product" />
          <div className="product-name">
            <a href="product.html">{product.name}</a>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">{product.price}</div>
        </div>
      </li>
    ))}
      </ul>
      <main className="main">
        <Router>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/catalog">
          <Product />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/order/:id">
          <OrderDetail />
        </Route>
      </Switch>
        </Router>
      
    </main>
    </div>
  );
}

export default App;
