"use client"
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathName = usePathname()
  console.log("Not Found Props : ",pathName);
  
  return (
    <>
      <h1>Review Not Found</h1>
      <span>Could not find the requested Review</span>
    </>
  );
};
export default NotFound;