import { useRouter } from "next/router";
import React from "react";

export default function Post() {
  const {
    query: { id },
  } = useRouter();
  return (
    <>
      <span>post: {id}</span>
    </>
  );
}
