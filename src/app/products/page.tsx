"use client";
import Link from "next/link";

export default function Home() {
  const getRandomInt = (num: number) => {
    return Math.floor(Math.random() * num);
  };

  const randomNum = getRandomInt(2);
  if (randomNum === 1) {
    throw new Error("Errror Loading Product Details....");
  }
  return (
    <>
      <h1>All Products</h1>
      <h2>
        {" "}
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        {" "}
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        {" "}
        <Link href="/products/3">Product 3</Link>
      </h2>
      <h2>
        {" "}
        <Link href="/products/4">Product 4</Link>
      </h2>
      <h2>
        {" "}
        <Link href="/products/5">Product 5</Link>
      </h2>
      <h2>
        {" "}
        <Link href="/products/6" replace>
          Product 6 (Back Button resets navigation history)
        </Link>
      </h2>
    </>
  );
}
