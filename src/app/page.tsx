import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>HOME!!</h1>
      <button>
        {" "}
        <Link href="/products">View all products</Link>

      </button>
      <button>
      <Link href="/complex-dashboard">Parallel Routing</Link>

      </button>
    </div>
  );
}
