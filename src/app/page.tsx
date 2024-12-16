"use client";

import Counter from "@/app/components/Counter";
import Image from "next/image";
import { useTextApi } from "@/hooks/useTextApi";
import { PlaceHolder } from "@/types/common";

export default function Home() {
  const { data } = useTextApi();

  console.log(data);

  return (
    <>
      <Counter />
      {data?.map((item: PlaceHolder) => (
        <div key={item.isbn} className="p-3">
          <h1 className="font-bold">title: {item.title}</h1>
          <div className="text-gray-500">text: {item.contents}</div>
          <Image
            alt="책 이미지"
            src={item.thumbnail}
            width={100}
            height={100}
            layout="intrinsic"
          />
        </div>
      ))}
    </>
  );
}
