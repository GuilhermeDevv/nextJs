import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Home do blog</h1>
      <Image src="" alt="" />
      <ul>
        <li>
          {/* teste */}
          <Link href="/blog/sobre" />
        </li>
      </ul>
    </>
  );
}
