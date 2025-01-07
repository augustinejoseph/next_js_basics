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
        backgroundColor: "lightblue",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        alignItems: "center",
        position: "relative",
      }}
    >
      {navLinks.map((item) => (
        <div key={item.name}>
          <Link href={item.url}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};
