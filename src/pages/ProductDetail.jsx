import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  // extracting parameters from a url
  const params = useParams();
  console.log(params.productId);

  return (
    <div>
      ProductDetail
      <h1>{params.productId}</h1>
    </div>
  );
};

export default ProductDetail;
