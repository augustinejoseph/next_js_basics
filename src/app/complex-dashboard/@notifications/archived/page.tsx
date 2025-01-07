import Card from "@/components/Card/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      Archived Notifications <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
