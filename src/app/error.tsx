"use client";
export default function ErrorBoundary({ error, reset }: { error: Error, reset : () => void }) {
  console.log(error);
    const errorMsg = JSON.stringify(error)
  return (
    <>
        <span>{errorMsg}</span>
      <h1>{error?.message}</h1>
      <button onClick={reset}>Try Again</button>
    </>
  );
}
