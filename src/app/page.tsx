// !! Types
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "next-theme",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
