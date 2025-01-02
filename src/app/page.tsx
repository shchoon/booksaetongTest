import { todayTopic } from "@/libs/apis/todayTopic";
import { todayAuthors } from "../libs/apis/todayAuthors";
import topics from "@/data/topics";
import authors from "@/data/authors";
import Search from "./components/home/Search";
import Carousel from "./components/home/Carousel";

export const revalidate = 30;

export default async function Home() {
  const randomIndex = Math.floor(Math.random() * 15);

  const bookData = {
    topic: await todayTopic(randomIndex),
    author: await todayAuthors(randomIndex),
  };

  return (
    <main className="mt-[121px] flex w-full flex-col items-center gap-4">
      <Search />
      <div className="flex w-2/3 flex-col justify-start gap-4 px-5 py-3">
        <div className="flex items-center gap-7">
          <h1 className="text-2xl font-bold">오늘의 주제</h1>
          <h3 className="text-xl font-semibold">{topics[randomIndex]}</h3>
        </div>
        <Carousel books={bookData.topic} />
        <div className="flex items-center gap-7">
          <h1 className="text-2xl font-bold">오늘의 작가</h1>
          <h3 className="text-xl font-semibold">{authors[randomIndex]}</h3>
        </div>
        <Carousel books={bookData.author} />
      </div>
    </main>
  );
}
