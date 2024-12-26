"use client";
import Image from "next/image";

import { bookInfo } from "@/types/common";

type IPops = {
  books: bookInfo[];
  type: string;
  title: string;
};

export default function Carousel(props: IPops) {
  return (
    <>
      <div className="flex gap-7">
        <h1 className="font-bold">오늘의 {props.type}</h1>
        <h3 className="font-bold">{props.title}</h3>
      </div>
      <section className="group relative flex h-[213px] w-full items-center overflow-hidden border-2 border-neutral-200">
        <div className="group-hover:pause absolute flex animate-crausel1 items-center">
          {props.books.map((book: bookInfo) => {
            return (
              <div
                className="relative mr-7 h-[180px] w-[121px]"
                key={book.isbn}
              >
                <Image src={book.thumbnail} fill alt={book.title} />
              </div>
            );
          })}
        </div>
        <div className="group-hover:pause absolute flex animate-crausel2 items-center">
          {props.books.map((book: bookInfo) => {
            return (
              <div
                className="relative mr-7 h-[180px] w-[121px]"
                key={book.isbn}
              >
                <Image src={book.thumbnail} fill alt={book.title} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
