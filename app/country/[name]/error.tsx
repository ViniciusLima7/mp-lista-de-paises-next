"use client";

import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
        An error occurred while displaying this page!
      </h1>
      <Link className="flex items-center py-2" href={"/"}>
        <Image
          src="/arrow-back.svg"
          alt="Icon back arrow"
          height={24}
          width={24}
        />
        Voltar
      </Link>
    </section>
  );
}
