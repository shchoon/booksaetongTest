"use client";
import Image from "next/image";

import SearchWhite from "/public/icons/SearchWhite.png";

export default function Search() {
  return (
    <div className="flex size-[150px] flex-col items-center justify-center rounded-full bg-black">
      <Image src={SearchWhite} width={58} height={51} alt="Go to search" />
      <span className="text-white">Go to search</span>
    </div>
  );
}
