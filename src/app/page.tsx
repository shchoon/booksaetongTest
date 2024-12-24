"use client";
import Image from "next/image";

import { bookInfo } from "../types/common";
import { todayTopic } from "@/libs/apis/todayTopic";
import { todayAuthors } from "../libs/apis/todayAuthors";
import { useQuery } from "@tanstack/react-query";
import { useTodayRecommendStore } from "@/stores/todayRecommend";

import Search from "/public/icons/SearchWhite.png";

export default function Home() {
  const booksOfTopic = useQuery({
    queryKey: ["todayBooks"],
    queryFn: () => todayTopic(),
  });
  const booksOfAuthor = useQuery({
    queryKey: ["author"],
    queryFn: () => todayAuthors(),
  });

  const { topic, author } = useTodayRecommendStore();

  console.log(topic, author);

  return (
    <main className="mt-[121px] flex w-full flex-col items-center gap-4">
      <div className="flex size-[150px] flex-col items-center justify-center rounded-full bg-black">
        <Image src={Search} width={58} height={51} alt="Go to search" />
        <span className="text-white">Go to search</span>
      </div>
      <div className="flex w-2/3 flex-col items-center justify-center gap-4 px-5 py-3">
        <h1 className="w-full text-left">오늘의 토픽</h1>
        <section className="group relative flex h-[213px] w-full items-center overflow-hidden border-2 border-neutral-200">
          <div className="group-hover:pause absolute flex animate-crausel1 items-center">
            {booksOfTopic.data?.map((book: bookInfo) => {
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
            {booksOfTopic.data?.map((book: bookInfo) => {
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
        <h1 className="w-full text-left">오늘의 작가</h1>
        <section className="group relative flex h-[213px] w-full items-center overflow-hidden border-2 border-neutral-200">
          <div className="group-hover:pause absolute flex animate-crausel1 items-center">
            {booksOfAuthor.data?.map((book: bookInfo) => {
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
            {booksOfAuthor.data?.map((book: bookInfo) => {
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
      </div>
    </main>
  );
}
