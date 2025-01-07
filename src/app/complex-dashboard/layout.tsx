export default function DashboradLayout({
  children,
  revenue,
  metrics,
  analytics,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  metrics: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{revenue}</div>
          <div>{metrics}</div>
        <div>{analytics}</div>

        </div>
      </div>
    </div>
  );
}
