import { Metadata } from "next";
import { Counter } from "./counter";

export const metadata: Metadata = {
    title : 'Counter',
    description : "Counter in NEXT JS"
}

export default function CounterApp() {
 
  return (
    <Counter />
  )
}
