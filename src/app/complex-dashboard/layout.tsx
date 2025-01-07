export default function DashboradLayout({
  children,
  revenue,
  metrics,
  analytics,
  notifications
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  metrics: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex", flexDirection: 'row' }}>
        <div>
          <div>{revenue}</div>
          <div>{metrics}</div>
          <div>{analytics}</div>
          <div>{notifications}</div>
        </div>
      </div>
    </div>
  );
}
