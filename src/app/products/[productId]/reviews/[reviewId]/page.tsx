export default async function SingleReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  console.log("Single Review Props : ", params);
  const { reviewId, productId } = await params;

  return (
    <h1>
      Single Review for Product {productId} and review ID {reviewId}
    </h1>
  );
}
