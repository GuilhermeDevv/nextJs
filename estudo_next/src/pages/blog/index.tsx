import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
};

export default function Blog({ name }: Props) {
  return (
    <>
      <h1>blog</h1>
      <span>O usuário que está acessando é o :{name}</span>
    </>
  );
}

export function getStaticProps() {
  return {
    props: { name: "Guilherme" },
  };
}
