type Params = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Params) => {
  const id = (await params).productId;
  return {
    title: `Product ID : ${id}`,
    description : ` Description of Product ${id}`
  };
};

const ProductDetails = async ({ params }: Params) => {
  const { productId } = await params;

  return <h1>Details of Product {productId}</h1>;
};

export default ProductDetails;
