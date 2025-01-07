import Card from "@/components/Card/card";
import Link from "next/link";

export default function Notifications() {
  return <Card>Notifications 
    <button><Link href='/complex-dashboard/archived'>Archived</Link></button>
  </Card>;
}
