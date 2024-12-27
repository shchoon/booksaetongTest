"use client";
import Image from "next/image";

import CloseIcon from "/public/icons/Cancel.png";

export default function Modal() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="relative flex h-[610px] w-[600px] flex-col justify-start gap-7 border-2 border-black bg-[#f4f4f4] p-16 drop-shadow-black">
        <Image
          src={CloseIcon}
          sizes="48"
          alt="closeIcon"
          className="absolute right-3 top-3"
        />
        <div className="h-[241px] w-[174px] border-2 border-black bg-inherit drop-shadow-black">
          {/* <Image /> */}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-black">The Shape of Design</h1>
          <div className="flex gap-7">
            <span className="text-sm font-normal">작가</span>
            <span className="text-sm font-semibold">손병호</span>
          </div>
          <div className="flex gap-7">
            <span className="text-sm font-normal">작가</span>
            <span className="text-sm font-semibold">손병호</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xl font-semibold">Desciption</span>
          <span className="text-sm font-normal">
            “If you create things, the book’s insights will inform the way you
            think about your work, regardless of how you make your living.”
          </span>
        </div>
      </div>
    </div>
  );
}
