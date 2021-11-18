import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CartegoryMenu";
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
