import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import { AddProduct, ProductList, SingleProduct } from "./components";

function App() {
  return (
    <Router>
      <div>
        <aside>
          <Link to={`/`}>Product</Link>
          <Link to={`/add-product`}>Add Product</Link>
        </aside>

        <main>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/product/:slug" component={SingleProduct} />
        </main>
      </div>
    </Router>
  );
}

export default App;
