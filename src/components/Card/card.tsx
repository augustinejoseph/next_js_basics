const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "100%",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
  };
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
