import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Welcome to Products Page!</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Product 1</Link>
        </li>
        <li>
          <Link to='/products/p2'>Product 2</Link>
        </li>
        <li>
          <Link to='/products/p3'>Product 3</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
