import { Metadata } from "next";
import { Counter } from "./counter";

export const metadata = {
    title : 'Counter',
    description : "Counter in NEXT JS"
}

export default function CounterApp() {
 
  return (
    <Counter />
  )
}
