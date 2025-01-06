import { NextPage } from "next";

const ProductDetails = async ({ params }: Promise<{ productId: string }>) => {
  const { productId } = await params;

  return <h1>Details of Product {productId}</h1>;
};

export default ProductDetails;
