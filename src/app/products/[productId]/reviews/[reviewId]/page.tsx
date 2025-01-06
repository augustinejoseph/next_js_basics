import { notFound } from "next/navigation";

export default async function SingleReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  console.log("Single Review Props : ", params);
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Single Review for Product {productId} and review ID {reviewId}
    </h1>
  );
}
