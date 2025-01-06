import { NextPage } from "next";

interface Props {}

const ProductDetails = ({ params }) => {
  const { productId } = params;

  return <h1>Details of Product {productId}</h1>;
};

export default ProductDetails;
