"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import SearchWhite from "/public/icons/SearchWhite.png";

export default function Search() {
  const router = useRouter();

  return (
    <div
      className="flex size-[150px] cursor-pointer flex-col items-center justify-center rounded-full bg-black"
      onClick={() => {
        router.push("/search");
      }}
    >
      <Image src={SearchWhite} width={58} height={51} alt="Go to search" />
      <span className="text-white">Go to search</span>
    </div>
  );
}
