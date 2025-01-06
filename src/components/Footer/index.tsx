import Link from "next/link";

export const Footer = () => {
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Register", url: "/register" },
    { name: "Products", url: "/products" },
    { name: "Blogs", url: "/blog" },
  ];
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "lightblue",
        padding: "1rem",
        bottom: "0",
        alignItems: "space-around",
        justifyContent: "space-around",
        display: "flex",
        gap: "100px",
      }}
    >
      {navLinks.map((item) => (
        <div>
          <Link href={item.url}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};
