import Link from "next/link";

export const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "1rem",
        alignItems: "center",
        justifyContent: "center",
        display: 'flex'
      }}
    >
      <Link href='/'>Home</Link>
      
    </div>
  );
};
