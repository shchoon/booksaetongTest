import Search from "./components/home/Search";
import Test from "./components/Test";

export default async function Home() {
  const randomIndex = Math.floor(Math.random() * 15);
  console.log(randomIndex);
  const data = await Test(randomIndex);
  // useEffect(() => {
  //   Test(randomIndex);
  // }, []);
  console.log(data.length);
  return (
    <main className="mt-[121px] flex w-full flex-col items-center gap-4">
      <Search />
      <strong>{randomIndex}</strong>
    </main>
  );
}
