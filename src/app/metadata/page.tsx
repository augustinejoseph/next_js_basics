import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Absolute Metadata as given here...",
  },
};

export default function MetadataPage() {
  return <h1>Metadata</h1>;
}
