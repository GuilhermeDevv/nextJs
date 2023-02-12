import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Olá mundo</h1>
      <Link href="/blog" >ir para blog</Link>
    </>
  );
}
