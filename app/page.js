import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
  return (
  <div>
    <h1>hello world</h1>
    <Link href="/dashboard"> <Button>Subscribe</Button> </Link> 

  </div>
  );
}
