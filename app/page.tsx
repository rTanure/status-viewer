import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-xl text-center">Your script status everywhere, everytime!</h1>
      <div className="flex gap-2">
        <Link href="/auth" >
          <Button>Sign In</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="outline">Dashboard</Button>
        </Link>
      </div>
    </main>
  );
}
