import Search from "../components/home/Search";
import Carousel from "../components/home/Carousel";
import topics from "@/data/topics";
import authors from "@/data/authors";
import RandomIndex from "@/data/randomIndex";
import { todayAuthors } from "@/libs/apis/todayAuthors";
import { todayTopic } from "@/libs/apis/todayTopic";

export default async function Home() {
  const randomIndex = RandomIndex();

  const data = {
    topic: await todayTopic(randomIndex),
    author: await todayAuthors(randomIndex),
  };

  console.log(randomIndex, topics[randomIndex], authors[randomIndex]);

  return (
    <main className="mt-[121px] flex w-full flex-col items-center gap-4">
      <Search />
      <strong>{topics[randomIndex]}</strong>
      <Carousel books={data.topic} />
      <strong>{authors[randomIndex]}</strong>
      <Carousel books={data.author} />
    </main>
  );
}
