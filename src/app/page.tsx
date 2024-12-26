import { todayTopic } from "@/libs/apis/todayTopic";
import { todayAuthors } from "../libs/apis/todayAuthors";
import topics from "@/data/topics";
import authors from "@/data/authors";
import Search from "./components/home/Search";
import Carusel from "./components/home/Carousel";

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
        <Carusel
          books={bookData.topic}
          type="토픽"
          title={topics[randomIndex]}
        />
        <Carusel
          books={bookData.author}
          type="작가"
          title={authors[randomIndex]}
        />
      </div>
    </main>
  );
}
